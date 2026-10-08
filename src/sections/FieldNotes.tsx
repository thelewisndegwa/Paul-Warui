import { Container } from '../components/Container'
import { PhotoFigure } from '../components/PhotoFigure'
import { fieldNotes } from '../data/photos'

const SIZES_WIDE = '(min-width: 60em) 35rem, calc(100vw - 2.5rem)'
const SIZES_TALL = '(min-width: 60em) 17rem, (min-width: 40em) 50vw, calc(100vw - 2.5rem)'

/**
 * Unnumbered photographic interlude between the career timeline and the
 * practice areas. Each photo is captioned with the place and the role it
 * documents, and links to that role.
 */
export function FieldNotes() {
  return (
    <section
      id="field-notes"
      className="section section--tight fieldnotes"
      aria-labelledby="fieldnotes-title"
    >
      <Container>
        <header className="fieldnotes__head" data-reveal>
          <h2 id="fieldnotes-title" className="eyebrow fieldnotes__eyebrow">
            Field notes
          </h2>
          <p className="fieldnotes__lede">
            Western Australia and the Northern Territory, 2020 onward.
          </p>
        </header>

        <div className="fieldnotes__grid">
          {fieldNotes.map((photo, i) => (
            <PhotoFigure
              key={photo.id}
              photo={photo}
              sizes={photo.width > photo.height ? SIZES_WIDE : SIZES_TALL}
              className="fieldnotes__item"
              style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
              reveal
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
