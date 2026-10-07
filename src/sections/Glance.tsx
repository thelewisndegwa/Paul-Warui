import { Container } from '../components/Container'
import { profile } from '../data/profile'

const facts = [
  {
    figure: '20+ years',
    label: 'Combined Australian and international nursing and emergency services experience.',
  },
  {
    figure: 'Australia + Kenya',
    label: 'Two healthcare environments and very different clinical contexts.',
  },
  {
    figure: 'Acute · Emergency · Rural · Remote',
    label: 'A career spanning multiple care environments, including aged care and occupational health.',
  },
]

export function Glance() {
  return (
    <section id="glance" className="section glance" aria-labelledby="glance-title">
      <Container>
        <h2 id="glance-title" className="sr-only">
          Experience at a glance
        </h2>
        <div className="glance__grid">
          <div className="glance__summary" data-reveal>
            <p className="eyebrow">02 · At a glance</p>
            <p className="glance__statement">{profile.summary[0]}</p>
            <p className="glance__body">
              {profile.summary[1]} {profile.summary[2]}
            </p>
          </div>

          <dl className="glance__facts">
            {facts.map((f, i) => (
              <div
                key={f.figure}
                className="glance__fact"
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
                <dt className="glance__figure">{f.figure}</dt>
                <dd className="glance__label">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
