import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'inverse' | 'ghost'
type Arrow = 'ne' | 'down' | 'none'

interface CommonProps {
  variant?: Variant
  arrow?: Arrow
  children: ReactNode
  className?: string
}

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
    href: string
    external?: boolean
  }

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: undefined
    external?: undefined
  }

export type ButtonProps = AnchorProps | NativeButtonProps

function classes(variant: Variant, className?: string) {
  const v = variant === 'primary' ? '' : ` btn--${variant}`
  return `btn${v}${className ? ` ${className}` : ''}`
}

function ArrowGlyph({ arrow }: { arrow: Arrow }) {
  if (arrow === 'none') return null
  return (
    <span className={`btn__arrow btn__arrow--${arrow}`} aria-hidden="true">
      {arrow === 'ne' ? '↗' : '↓'}
    </span>
  )
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = 'primary', arrow = 'none', children, className, href, external, ...rest } = props
    return (
      <a
        href={href}
        className={classes(variant, className)}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        <span>{children}</span>
        <ArrowGlyph arrow={arrow} />
      </a>
    )
  }

  const { variant = 'primary', arrow = 'none', children, className, type = 'button', ...rest } = props
  return (
    <button type={type} className={classes(variant, className)} {...rest}>
      <span>{children}</span>
      <ArrowGlyph arrow={arrow} />
    </button>
  )
}
