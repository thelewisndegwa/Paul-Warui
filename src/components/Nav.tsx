import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { navLinks, profile } from '../data/profile'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#about" className="nav__brand" onClick={close}>
          <span className="nav__brand-name">{profile.name}</span>
          <span className="nav__brand-rn">{profile.postNominal}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__end">
          <a
            href={profile.resumeUrl}
            className="nav__resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <span aria-hidden="true">↗</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="nav__toggle-bar" aria-hidden="true" />
            <span className="nav__toggle-bar" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="nav__mobile" hidden={!open}>
        <nav aria-label="Primary, mobile">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ '--i': i } as CSSProperties}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ '--i': navLinks.length } as CSSProperties}>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                Résumé <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
        <p className="nav__mobile-foot">
          {profile.title} · {profile.location}
        </p>
      </div>
    </header>
  )
}
