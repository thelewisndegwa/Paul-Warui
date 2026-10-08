# Paul Kariuki Warui, RN — Portfolio

Personal professional portfolio for Paul Kariuki Warui, Registered Nurse (Perth, WA).
Built with Vite + React + TypeScript and plain CSS. No UI framework.

## Run

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to /dist
npm run preview   # serve the production build
```

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/profile.ts` | Name, contact, languages, résumé path, portrait/LinkedIn slots |
| `src/data/photos.ts` | Photographs: hero portrait, the "Field notes" band, the emergency-band photo. Captions and the role each photo links to |
| `src/data/experience.ts` | Roles (responsibilities are the résumé bullets) |
| `src/data/credentials.ts` | Education, registration, memberships, certifications |
| `src/data/business.ts` | HealthFirst Nursing Services — ASIC business name registration, ABN (street address intentionally omitted) |
| `src/data/practice.ts` | Practice areas, leadership, emergency services, approach (all cross-referenced to roles) |
| `src/sections/*` | One component per page section, in page order |
| `src/components/*` | Nav, Timeline, ExperienceEntry, CredentialItem, SectionHeading, PhotoFigure, Button, Container |
| `src/styles/*` | Tokens + base (`global.css`), nav, and section styles |
| `public/resume/` | The résumé PDF served by the "Download résumé" buttons |
| `public/photos/` | Web copies of the photographs: `<name>.jpg` (full) and `<name>-720.jpg` (720px wide, for `srcset`) |

## Content rules

The résumé is the source of truth. Every claim on the site maps to a line in it.
When the résumé changes, update the data files and replace the PDF in `public/resume/`.

## Photographs

Photos are content too: each caption names a place and the role it documents, and links to
that role. Keep captions to what the résumé or the photo itself (e.g. a sign) supports.

To add a photo:

1. Save it to `public/photos/<kebab-name>.jpg`, plus a 720px-wide copy as `<kebab-name>-720.jpg`.
2. Add an entry to `src/data/photos.ts` with its pixel `width`/`height`, descriptive `alt`,
   `place`, `context` and the `roleId` it belongs to.

## To add later

- **LinkedIn:** set `profile.linkedin` to the full URL.
