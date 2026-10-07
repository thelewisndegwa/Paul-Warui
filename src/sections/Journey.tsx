import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Timeline, type TimelineEntry } from '../components/Timeline'
import { education } from '../data/credentials'
import { rolesChronological } from '../data/experience'

/**
 * Builds the timeline from roles + the Australian degree, ordered by year.
 * Only the ECU degree appears here (it marks the transition into Australian
 * practice); the full education list lives in its own section.
 */
function buildEntries(): TimelineEntry[] {
  const roleEntries: TimelineEntry[] = rolesChronological.map((r) => ({
    id: r.id,
    year: r.timelineYear,
    period: r.period,
    kind: 'role',
    title: r.title,
    organisation: r.organisations ? r.organisations.join(' / ') : r.organisation,
    location: r.location,
    country: r.country,
    tags: r.settings,
    summary: r.summary,
    href: `#${r.id}`,
    ongoing: r.end === 'Present',
  }))

  const ecu = education.find((e) => e.id === 'edu-ecu')
  const eduEntries: TimelineEntry[] = ecu
    ? [
        {
          id: ecu.id,
          year: ecu.year,
          period: ecu.year,
          kind: 'education',
          title: ecu.title,
          organisation: ecu.institution,
          location: 'Australia',
          country: 'Australia',
          href: '#education',
        },
      ]
    : []

  return [...roleEntries, ...eduEntries].sort(
    (a, b) => Number.parseInt(a.year, 10) - Number.parseInt(b.year, 10),
  )
}

const entries = buildEntries()

export function Journey() {
  return (
    <section id="experience" className="section journey" aria-labelledby="journey-title">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Career journey"
          id="journey-title"
          title={
            <>
              From Accident &amp; Emergency in Kenya to remote area nursing in Central Australia.
            </>
          }
          lede="More than two decades across two countries, moving between the bedside, occupational health, service management and rural and remote practice."
        />

        <div className="journey__legend" aria-hidden="true">
          <span>
            <i className="journey__swatch journey__swatch--kenya" /> Kenya
          </span>
          <span>
            <i className="journey__swatch journey__swatch--australia" /> Australia
          </span>
        </div>

        <Timeline entries={entries} ariaLabel="Career timeline, 1999 to present" />
      </Container>
    </section>
  )
}
