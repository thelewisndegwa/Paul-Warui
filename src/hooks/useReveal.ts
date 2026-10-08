import { useEffect } from 'react'

/**
 * Sets `data-revealed` on every `[data-reveal]` element as it enters the
 * viewport. Styles are gated behind `html.js` so content is always visible
 * without JS, and `prefers-reduced-motion` disables the transition in CSS.
 *
 * The marker is an attribute rather than a class on purpose: React owns
 * `className` and rewrites it whenever a component re-renders with a new
 * value (e.g. an experience entry toggling `xp--open`), which would strip a
 * class we added imperatively. React never touches attributes it did not
 * render, so `data-revealed` survives re-renders.
 */
const REVEALED = 'data-revealed'

export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (elements.length === 0) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.setAttribute(REVEALED, ''))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute(REVEALED, '')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
