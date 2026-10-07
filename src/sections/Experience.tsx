import { useCallback, useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { ExperienceEntry } from '../components/ExperienceEntry'
import { SectionHeading } from '../components/SectionHeading'
import { rolesByRecency } from '../data/experience'
import { profile } from '../data/profile'

const roleIds = new Set(rolesByRecency.map((r) => r.id))

function idFromHash(): string | null {
  const id = window.location.hash.replace(/^#/, '')
  return roleIds.has(id) ? id : null
}

export function Experience() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set())

  // Arriving via a #role-… link (e.g. from the timeline) opens that entry.
  useEffect(() => {
    const sync = () => {
      const id = idFromHash()
      if (id) setOpenIds((prev) => new Set(prev).add(id))
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const allOpen = openIds.size === rolesByRecency.length
  const toggleAll = () =>
    setOpenIds(allOpen ? new Set() : new Set(rolesByRecency.map((r) => r.id)))

  return (
    <section id="roles" className="section roles" aria-labelledby="roles-title">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Professional experience"
          id="roles-title"
          title="The full record, most recent first."
          lede="Each entry can be opened for the responsibilities listed in the résumé. The résumé itself remains the authoritative document."
        />

        <div className="roles__toolbar" data-reveal>
          <button type="button" className="roles__toggle-all" onClick={toggleAll}>
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
          <Button href={profile.resumeUrl} variant="ghost" arrow="ne" external>
            Download résumé (PDF)
          </Button>
        </div>

        <div className="roles__list">
          {rolesByRecency.map((role) => (
            <ExperienceEntry
              key={role.id}
              role={role}
              open={openIds.has(role.id)}
              onToggle={toggle}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
