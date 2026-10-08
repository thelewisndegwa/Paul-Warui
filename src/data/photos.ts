/**
 * Photographs. Files live in /public/photos as `<name>.jpg` (full size) and
 * `<name>-720.jpg` (720px wide) for srcset.
 *
 * Captions follow the site's content rule: the place and role on each caption
 * are drawn from the résumé (see `roleId`) or from what is legibly in the
 * frame (e.g. a sign). Alt text describes the image; the caption carries the
 * context.
 */

export interface Photo {
  id: string
  /** Base filename without extension, e.g. 'central-australia'. */
  file: string
  width: number
  height: number
  alt: string
  /** Short place line shown first in the caption. */
  place?: string
  /** Role / period line shown second in the caption. */
  context?: string
  /** Role id in experience.ts; the caption links to it. */
  roleId?: string
}

/** A photo that is shown with a caption. */
export type CaptionedPhoto = Photo & Required<Pick<Photo, 'place' | 'context'>>

const BASE = '/photos'

export const photoSrc = (p: Pick<Photo, 'file'>) => `${BASE}/${p.file}.jpg`
export const photoSrcSet = (p: Pick<Photo, 'file' | 'width'>) =>
  `${BASE}/${p.file}-720.jpg 720w, ${BASE}/${p.file}.jpg ${p.width}w`

/** Hero portrait. The hero's own caption (career geography) frames it. */
export const portrait: Photo = {
  id: 'photo-portrait',
  file: 'paul-warui-portrait',
  width: 1200,
  height: 1600,
  alt: 'Paul Kariuki Warui seated cross-legged on a boulder below a red rock face.',
}

/** Photo band shown after the career timeline, in chronological order. */
export const fieldNotes: CaptionedPhoto[] = [
  {
    id: 'photo-moonya',
    file: 'moonya-nursing-home-manjimup',
    width: 1599,
    height: 1202,
    alt: 'Paul in navy scrubs in front of the Moonya Nursing Home sign, with the terracotta-roofed facility behind.',
    place: 'Baptistcare Moonya RACF, Manjimup WA',
    context: 'Registered Nurse · 2020 – 2023',
    roleId: 'role-moonya',
  },
  {
    id: 'photo-nt-border',
    file: 'northern-territory-border',
    width: 1200,
    height: 1600,
    alt: 'Paul in scrubs pointing at a sticker-covered “Welcome to the Northern Territory” road sign at dusk, red earth around.',
    place: 'Northern Territory border',
    context: 'Agency practice across WA & NT · 2023 – Present',
    roleId: 'role-agency',
  },
  {
    id: 'photo-central-australia',
    file: 'central-australia',
    width: 1200,
    height: 1600,
    alt: 'Paul sitting on red sand with a dog beside him, spinifex and low ranges under a clouded sky.',
    place: 'Central Australia',
    context: 'Remote area nursing · 2026 – Present',
    roleId: 'role-congress',
  },
]

/** Single image for the emergency services band. */
export const emergencyPhoto: CaptionedPhoto = {
  id: 'photo-ambulance',
  file: 'remote-ambulance',
  width: 1200,
  height: 1599,
  alt: 'Paul in navy scrubs in front of a white four-wheel-drive ambulance with red check markings, parked under a carport.',
  place: 'Remote clinic ambulance bay',
  context: 'Remote acute presentations · 2026 – Present',
  roleId: 'role-congress',
}
