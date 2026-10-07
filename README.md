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
| `src/data/experience.ts` | Roles (responsibilities are the résumé bullets) |
| `src/data/credentials.ts` | Education, registration, memberships, certifications |
| `src/data/practice.ts` | Practice areas, leadership, emergency services, approach (all cross-referenced to roles) |
| `src/sections/*` | One component per page section, in page order |
| `src/components/*` | Nav, Timeline, ExperienceEntry, CredentialItem, SectionHeading, Button, Container |
| `src/styles/*` | Tokens + base (`global.css`), nav, and section styles |
| `public/resume/` | The résumé PDF served by the "Download résumé" buttons |

## Content rules

The résumé is the source of truth. Every claim on the site maps to a line in it.
When the résumé changes, update the data files and replace the PDF in `public/resume/`.

## To add later

- **Portrait:** drop an image in `public/` and set `profile.portrait` in `src/data/profile.ts`.
- **LinkedIn:** set `profile.linkedin` to the full URL.
