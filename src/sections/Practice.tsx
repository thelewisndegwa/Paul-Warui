import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { roles } from '../data/experience'
import { practiceAreas } from '../data/practice'

const roleLabel = (id: string) => {
  const r = roles.find((x) => x.id === id)
  if (!r) return null
  return r.organisations ? 'Agency practice' : r.organisation
}

export function Practice() {
  return (
    <section id="practice" className="section practice" aria-labelledby="practice-title">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Clinical practice"
          id="practice-title"
          title="Areas of practice, built up one setting at a time."
          lede="Five areas recur through the résumé. Each is listed with the specific roles that ground it."
        />

        <ol className="practice__list">
          {practiceAreas.map((area) => (
            <li key={area.id} className="practice__item" data-reveal>
              <div className="practice__head">
                <span className="practice__index serif" aria-hidden="true">
                  {area.index}
                </span>
                <h3 className="practice__title">{area.title}</h3>
              </div>

              <div className="practice__body">
                <p className="practice__lede">{area.lede}</p>
                <ul className="practice__points">
                  {area.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="practice__sources">
                  <span className="eyebrow">Grounded in</span>
                  <span>
                    {area.sources
                      .map(roleLabel)
                      .filter(Boolean)
                      .join(' · ')}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
