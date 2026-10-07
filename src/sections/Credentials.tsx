import { Container } from '../components/Container'
import { CredentialItem } from '../components/CredentialItem'
import { SectionHeading } from '../components/SectionHeading'
import { certifications, registrations } from '../data/credentials'
import { clinicalSystems } from '../data/experience'

export function Credentials() {
  return (
    <section id="credentials" className="section creds" aria-labelledby="creds-title">
      <Container>
        <SectionHeading
          index="10"
          eyebrow="Registration & credentials"
          id="creds-title"
          title="Registration, memberships and certifications."
          lede="As listed in the current résumé, spanning Australian and Kenyan registration bodies and emergency, infection control and workplace safety training."
        />

        <div className="creds__grid">
          <div className="creds__group" data-reveal>
            <h3 className="creds__group-title">Registration &amp; memberships</h3>
            <ol className="creds__list creds__list--indexed">
              {registrations.map((c, i) => (
                <CredentialItem key={c.name + (c.issuer ?? '')} credential={c} index={i} />
              ))}
            </ol>
          </div>

          <div className="creds__group" data-reveal>
            <h3 className="creds__group-title">Certifications</h3>
            <ul className="creds__list creds__list--two">
              {certifications.map((c) => (
                <CredentialItem key={c.name} credential={c} />
              ))}
            </ul>
          </div>
        </div>

        {/* 11 — Clinical systems: deliberately small. */}
        <div id="systems" className="systems" data-reveal>
          <p className="eyebrow">11 · Clinical systems</p>
          <p className="systems__line">
            <span className="systems__intro">Familiar with</span>
            <span className="systems__names">
              {clinicalSystems.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < clinicalSystems.length - 1 ? (
                    <span className="systems__dot" aria-hidden="true">
                      {' '}
                      ·{' '}
                    </span>
                  ) : null}
                </span>
              ))}
            </span>
            <span className="systems__note">as used across agency, aged care and rural/remote practice.</span>
          </p>
        </div>
      </Container>
    </section>
  )
}
