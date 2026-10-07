import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { education } from '../data/credentials'

export function Education() {
  return (
    <section id="education" className="section edu" aria-labelledby="edu-title">
      <Container>
        <SectionHeading
          index="09"
          eyebrow="Education"
          id="edu-title"
          title="Four qualifications across two countries."
        />

        <ol className="edu__list">
          {education.map((q, i) => (
            <li
              key={q.id}
              className="edu__item"
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
            >
              <span className="edu__year serif">{q.year}</span>
              <div className="edu__body">
                <h3 className="edu__title">{q.title}</h3>
                <p className="edu__inst">
                  {q.institution}
                  <span className="edu__country"> · {q.country}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
