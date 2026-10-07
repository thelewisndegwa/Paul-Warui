import { useEffect } from 'react'

/**
 * Adds `.is-in` to every `[data-reveal]` element as it enters the viewport.
 * Styles are gated behind `html.js` so content is always visible without JS,
 * and `prefers-reduced-motion` disables the transition entirely in CSS.
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (elements.length === 0) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
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
