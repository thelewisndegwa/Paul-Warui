import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { business } from '../data/business'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <Container>
        <div className="contact__grid">
          <div className="contact__lead" data-reveal>
            <p className="eyebrow">13 · Contact</p>
            <h2 id="contact-title" className="contact__title">
              Professional enquiries
            </h2>
            <p className="contact__name">
              {profile.name}, {profile.postNominal}
            </p>
            <p className="contact__sub">
              {profile.title} · {profile.location}
            </p>
            <div className="contact__actions">
              <Button href={`mailto:${profile.email}`}>Email Paul</Button>
              <Button
                href={profile.resumeUrl}
                variant="secondary"
                arrow="ne"
                external
                download={profile.resumeFileName}
              >
                Download résumé
              </Button>
            </div>
          </div>

          <dl className="contact__details" data-reveal>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{profile.languages.join(' · ')}</dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                {profile.linkedin ? (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    View profile <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="contact__pending">Profile link to be added</span>
                )}
              </dd>
            </div>
            <div>
              <dt>References</dt>
              <dd>Available on request</dd>
            </div>
          </dl>
        </div>

        <aside id="business" className="business" aria-labelledby="business-title" data-reveal>
          <div className="business__intro">
            <p className="eyebrow">Independent practice</p>
            <h3 id="business-title" className="business__name">
              {business.name}
            </h3>
            <p className="business__body">
              Business name held by {business.holder} and registered with the {business.registrar}{' '}
              on {business.registrationDate}.
            </p>
          </div>
          <dl className="business__details">
            <div>
              <dt>ABN</dt>
              <dd>{business.abn}</dd>
            </div>
            <div>
              <dt>Holder</dt>
              <dd>
                {business.holder} · {business.holderType}
              </dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>
                {business.status} · ASIC
              </dd>
            </div>
            <div>
              <dt>Business email</dt>
              <dd>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </dd>
            </div>
          </dl>
        </aside>
      </Container>
    </section>
  )
}
