import type { ReactNode } from 'react'

interface SectionHeadingProps {
  /** Two-digit section index, e.g. "03" */
  index: string
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  /** id applied to the <h2> so the parent <section> can reference it via aria-labelledby */
  id: string
  className?: string
}

export function SectionHeading({ index, eyebrow, title, lede, id, className }: SectionHeadingProps) {
  return (
    <header className={className ? `section-head ${className}` : 'section-head'} data-reveal>
      <p className="section-head__index eyebrow">
        <span aria-hidden="true">{index}</span>
        <span className="sr-only">Section {index}:</span> {eyebrow}
      </p>
      <h2 id={id} className="section-head__title">
        {title}
      </h2>
      {lede ? <p className="section-head__lede">{lede}</p> : null}
    </header>
  )
}
