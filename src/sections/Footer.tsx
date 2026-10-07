import { Container } from '../components/Container'
import { navLinks, profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <p className="footer__name">
            {profile.name}, {profile.postNominal}
            <span className="footer__meta">
              {profile.title} · {profile.location}
            </span>
          </p>
          <nav aria-label="Footer">
            <ul className="footer__links">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Résumé <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ol className="footer__path" aria-hidden="true">
          {profile.countries.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>
        <p className="footer__copy">© {new Date().getFullYear()} Paul Kariuki Warui</p>
      </Container>
    </footer>
  )
}
