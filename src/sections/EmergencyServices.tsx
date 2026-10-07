import { Container } from '../components/Container'
import { emergencyCredentials, emergencyRecords } from '../data/practice'

export function EmergencyServices() {
  return (
    <section id="emergency" className="section emerg" aria-labelledby="emerg-title">
      <Container>
        <header className="emerg__head" data-reveal>
          <p className="eyebrow emerg__eyebrow">08 · Emergency services</p>
          <h2 id="emerg-title" className="emerg__title">
            A thread of emergency work runs the length of the career.
          </h2>
          <p className="emerg__lede">
            It begins in Accident &amp; Emergency, moves through evacuation coordination and
            ambulance service management, and continues today in emergency departments and remote
            acute presentations.
          </p>
        </header>

        <div className="emerg__grid">
          <table className="emerg__table">
            <caption className="sr-only">Emergency-related roles and settings</caption>
            <thead>
              <tr>
                <th scope="col">Setting</th>
                <th scope="col">Organisation</th>
                <th scope="col">Period</th>
                <th scope="col">Scope</th>
              </tr>
            </thead>
            <tbody>
              {emergencyRecords.map((r, i) => (
                <tr key={r.setting + r.period} data-reveal style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}>
                  <th scope="row" data-label="Setting">
                    {r.setting}
                  </th>
                  <td data-label="Organisation">{r.organisation}</td>
                  <td data-label="Period" className="emerg__period">
                    {r.period}
                  </td>
                  <td data-label="Scope">{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <aside className="emerg__aside" data-reveal aria-labelledby="emerg-cred-title">
            <h3 id="emerg-cred-title" className="eyebrow emerg__aside-title">
              Emergency credentials
            </h3>
            <ul className="emerg__creds">
              {emergencyCredentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  )
}
