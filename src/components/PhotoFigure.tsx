import type { CSSProperties } from 'react'
import { photoSrc, photoSrcSet, type CaptionedPhoto } from '../data/photos'

interface PhotoFigureProps {
  photo: CaptionedPhoto
  /** `sizes` attribute describing the rendered width at each breakpoint. */
  sizes: string
  className?: string
  style?: CSSProperties
  /** Opt in to the scroll-reveal transition. */
  reveal?: boolean
}

/**
 * A captioned photograph. The image is cropped to a fixed ratio by CSS
 * (3:2 for landscape sources, 3:4 for portrait) so rows in a grid align.
 * The place line links to the role the photo documents, if any.
 */
export function PhotoFigure({ photo, sizes, className, style, reveal }: PhotoFigureProps) {
  const wide = photo.width > photo.height
  const classes = ['photo', wide ? 'photo--wide' : 'photo--tall', className].filter(Boolean).join(' ')

  return (
    <figure className={classes} style={style} data-reveal={reveal ? '' : undefined}>
      <div className="photo__frame">
        <img
          src={photoSrc(photo)}
          srcSet={photoSrcSet(photo)}
          sizes={sizes}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="photo__caption">
        <span className="photo__place">
          {photo.roleId ? (
            <a href={`#${photo.roleId}`} className="photo__link">
              {photo.place}
            </a>
          ) : (
            photo.place
          )}
        </span>
        <span className="photo__context">{photo.context}</span>
      </figcaption>
    </figure>
  )
}
