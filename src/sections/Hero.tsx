import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { MeridianGraphic } from '../components/MeridianGraphic'
import { business } from '../data/business'
import { photoSrc, photoSrcSet } from '../data/photos'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section id="about" className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow hero__eyebrow">Registered Nurse · Australia</p>
            <h1 id="hero-title" className="hero__title">
              Nursing across complexity, care&nbsp;settings and continents.
            </h1>

            <div className="hero__intro">
              <p className="hero__name">
                {profile.name}, <abbr title="Registered Nurse">{profile.postNominal}</abbr>
              </p>
              <p className="hero__lede">
                Registered Nurse with more than 20 years of combined Australian and international
                nursing and emergency services experience.
              </p>
            </div>

            <div className="hero__actions">
              <Button href="#experience" arrow="down">
                Explore experience
              </Button>
              <Button href={profile.resumeUrl} variant="secondary" arrow="ne" external>
                View résumé
              </Button>
            </div>

            <dl className="hero__meta">
              <div>
                <dt>Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Registration</dt>
                <dd>NMBA</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{profile.languages.join(' · ')}</dd>
              </div>
              <div>
                <dt>Independent practice</dt>
                <dd>
                  <a href="#business" className="hero__meta-link">
                    {business.name}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/*
            Portrait slot. When `profile.portrait` is set, the photograph
            replaces the editorial graphic. It is the page's LCP element, so it
            loads eagerly with high priority.
          */}
          <figure className="hero__visual">
            {profile.portrait ? (
              <img
                src={photoSrc(profile.portrait)}
                srcSet={photoSrcSet(profile.portrait)}
                sizes="(min-width: 56.25em) min(30rem, 40vw), min(30rem, calc(100vw - 2.5rem))"
                alt={profile.portrait.alt}
                className="hero__portrait"
                width={profile.portrait.width}
                height={profile.portrait.height}
                fetchPriority="high"
                decoding="async"
              />
            ) : (
              <MeridianGraphic />
            )}
            <figcaption className="hero__caption">
              <span>{profile.countries.join(' — ')}</span>
              <span>1999 — present</span>
            </figcaption>
          </figure>
        </div>

        <ol className="hero__path" aria-label="Areas of practice across the career">
          {profile.careerPath.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
