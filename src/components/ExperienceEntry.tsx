import { useId } from 'react'
import type { Role } from '../data/experience'

interface ExperienceEntryProps {
  role: Role
  open: boolean
  onToggle: (id: string) => void
}

export function ExperienceEntry({ role, open, onToggle }: ExperienceEntryProps) {
  const panelId = useId()
  const isCurrent = role.end === 'Present'

  return (
    <article id={role.id} className={`xp${open ? ' xp--open' : ''}`} data-reveal>
      <h3 className="xp__heading">
        <button
          type="button"
          className="xp__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggle(role.id)}
        >
          <span className="xp__when">
            <span className="xp__period">{role.period}</span>
            {isCurrent ? <span className="xp__current">Current</span> : null}
          </span>
          <span className="xp__main">
            <span className="xp__title">{role.title}</span>
            <span className="xp__org">
              {role.organisation}
              <span className="xp__sep" aria-hidden="true">
                {' '}
                ·{' '}
              </span>
              <span className="xp__loc">{role.location}</span>
            </span>
            <span className="xp__summary">{role.summary}</span>
          </span>
          <span className="xp__icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </h3>

      <div id={panelId} className="xp__panel" hidden={!open}>
        <div className="xp__panel-inner">
          {role.organisations ? (
            <div className="xp__block">
              <p className="eyebrow">Agencies</p>
              <p className="xp__agencies">{role.organisations.join(' · ')}</p>
            </div>
          ) : null}

          <div className="xp__block">
            <p className="eyebrow">Responsibilities</p>
            <ul className="xp__list">
              {role.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="xp__block xp__block--meta">
            <div>
              <p className="eyebrow">Settings</p>
              <ul className="xp__tags">
                {role.settings.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {role.systems ? (
              <div>
                <p className="eyebrow">Systems</p>
                <p className="xp__systems">{role.systems.join(', ')}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
