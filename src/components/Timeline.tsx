import type { CSSProperties } from 'react'

export interface TimelineEntry {
  id: string
  /** Large year displayed on the rail, e.g. "1999" */
  year: string
  /** Full period, e.g. "1999 – 2008" */
  period: string
  kind: 'role' | 'education' | 'business'
  title: string
  organisation: string
  location: string
  country?: 'Kenya' | 'Australia'
  tags?: string[]
  summary?: string
  /** Anchor to the detailed entry (expands it on arrival). */
  href?: string
  ongoing?: boolean
}

interface TimelineProps {
  entries: TimelineEntry[]
  ariaLabel: string
}

const kindLabel: Record<TimelineEntry['kind'], string> = {
  role: 'Role',
  education: 'Education',
  business: 'Registered business',
}

export function Timeline({ entries, ariaLabel }: TimelineProps) {
  return (
    <ol className="timeline" aria-label={ariaLabel}>
      {entries.map((entry, i) => (
        <li
          key={entry.id}
          id={`tl-${entry.id}`}
          className={[
            'tl',
            entry.ongoing ? 'tl--ongoing' : '',
            entry.kind !== 'role' ? `tl--${entry.kind}` : '',
            entry.country ? `tl--${entry.country.toLowerCase()}` : '',
          ]
            .filter(Boolean)
            .join(' ')}
          data-reveal
          style={{ '--reveal-delay': `${Math.min(i, 4) * 60}ms` } as CSSProperties}
        >
          <div className="tl__year">
            <span className="tl__year-big" aria-hidden="true">
              {entry.year}
            </span>
            <span className="tl__period">{entry.period}</span>
          </div>

          <div className="tl__rail" aria-hidden="true">
            <span className="tl__dot" />
          </div>

          <div className="tl__body">
            <p className="tl__kind eyebrow">
              {kindLabel[entry.kind]} · {entry.location}
            </p>
            <h3 className="tl__title">
              {entry.href ? (
                <a href={entry.href} className="tl__title-link">
                  {entry.title}
                </a>
              ) : (
                entry.title
              )}
            </h3>
            <p className="tl__org">{entry.organisation}</p>
            {entry.summary ? <p className="tl__summary">{entry.summary}</p> : null}
            {entry.tags && entry.tags.length > 0 ? (
              <ul className="tl__tags" aria-label="Settings">
                {entry.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
            {entry.href ? (
              <a href={entry.href} className="textlink tl__more">
                {entry.kind === 'role' ? 'Role details' : 'Details'} <span aria-hidden="true">↓</span>
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}
