import { Container } from '../components/Container'
import { approach } from '../data/practice'

export function Approach() {
  return (
    <section id="approach" className="section approach" aria-labelledby="approach-title">
      <Container>
        <div className="approach__grid">
          <div className="approach__statement" data-reveal>
            <p className="eyebrow">12 · Professional approach</p>
            <h2 id="approach-title" className="approach__title">
              Evidence-based care, applied steadily in very different environments.
            </h2>
            <p className="approach__body">
              The résumé describes a practitioner working to NMBA standards and WACHS frameworks,
              with a sustained emphasis on infection prevention, clinical governance, cultural
              safety and multidisciplinary work, carried across emergency, acute, aged care,
              occupational health and remote settings.
            </p>
          </div>

          <dl className="approach__list">
            {approach.map((a, i) => (
              <div
                key={a.title}
                className="approach__item"
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
              >
                <dt>{a.title}</dt>
                <dd>{a.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
