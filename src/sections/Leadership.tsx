import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { leadershipOrganisational, leadershipWithinTeams, type LeadershipItem } from '../data/practice'

function LeadershipColumn({
  heading,
  note,
  items,
}: {
  heading: string
  note: string
  items: LeadershipItem[]
}) {
  return (
    <div className="lead__col" data-reveal>
      <h3 className="lead__col-title">{heading}</h3>
      <p className="lead__col-note">{note}</p>
      <ul className="lead__items">
        {items.map((item) => (
          <li key={item.label + item.context}>
            <span className="lead__label">{item.label}</span>
            <span className="lead__context">{item.context}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Leadership() {
  return (
    <section id="leadership" className="section lead" aria-labelledby="lead-title">
      <Container>
        <SectionHeading
          index="07"
          eyebrow="Leadership"
          id="lead-title"
          title="Within clinical teams, and at the level of a service."
          lede="The résumé records leadership in two registers: coordinating and supervising on shift, and running an emergency service as General Manager."
        />

        <div className="lead__grid">
          <LeadershipColumn
            heading="Within clinical teams"
            note="Shift-level responsibility across hospitals, aged care and remote facilities."
            items={leadershipWithinTeams}
          />
          <LeadershipColumn
            heading="At an organisational level"
            note="Service management and coordination roles in Kenya and across the Africa Region."
            items={leadershipOrganisational}
          />
        </div>
      </Container>
    </section>
  )
}
