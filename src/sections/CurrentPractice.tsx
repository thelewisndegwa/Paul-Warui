import { Container } from '../components/Container'
import { currentRole } from '../data/experience'

export function CurrentPractice() {
  return (
    <section id="current" className="section current" aria-labelledby="current-title">
      <Container>
        <div className="current__grid">
          <div className="current__intro" data-reveal>
            <p className="eyebrow current__eyebrow">05 · Current practice · {currentRole.period}</p>
            <h2 id="current-title" className="current__title">
              Remote area nursing with {currentRole.organisation}.
            </h2>
            <p className="current__role">
              <span>{currentRole.title}</span>
              <span>{currentRole.location}</span>
            </p>
            <p className="current__body">
              A single remote role spanning primary and acute care: chronic disease management
              and immunisations; child, maternal, men’s, youth and women’s health; and the acute
              presentations and emergency care that arrive alongside them.
            </p>
            <a href={`#${currentRole.id}`} className="textlink current__link">
              Full role entry <span aria-hidden="true">↓</span>
            </a>
          </div>

          <ol className="current__domains" aria-label="Areas of responsibility">
            {currentRole.responsibilities.map((r, i) => (
              <li
                key={r}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
              >
                <span className="current__num serif" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="current__domain">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
