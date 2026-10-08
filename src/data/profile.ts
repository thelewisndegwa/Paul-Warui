import { portrait, type Photo } from './photos'

/**
 * Core profile data. Source of truth: "Paul Warui Resume Aug 26.pdf".
 * Do not add facts here that are not in the résumé.
 */
export const profile = {
  name: 'Paul Kariuki Warui',
  postNominal: 'RN',
  title: 'Registered Nurse',
  location: 'Perth, WA',
  phone: '0449 652 828',
  phoneHref: 'tel:+61449652828',
  email: 'waruip@gmail.com',
  languages: ['English', 'Swahili'],

  /** Set to a full LinkedIn URL when available. Leave null to show a placeholder. */
  linkedin: null as string | null,

  /**
   * Hero portrait. Defined in `photos.ts`; set to null to fall back to the
   * editorial Meridian graphic.
   */
  portrait: portrait as Photo | null,

  /** PDF lives in /public/resume. Replace the file to update the download. */
  resumeUrl: '/resume/Paul-Kariuki-Warui-Resume.pdf',
  resumeFileName: 'Paul-Kariuki-Warui-Resume.pdf',

  summary: [
    'Registered Nurse with strong experience across acute care, emergency, aged care, and rural/remote settings.',
    'Skilled in clinical coordination, infection prevention and control, occupational health and managing complex care environments.',
    'Brings over 20 years of combined Australian and international nursing and emergency services experience, with solid knowledge of NMBA standards, WACHS frameworks, and clinical governance.',
  ],

  keySkills: [
    'Acute & Emergency Nursing',
    'Rural & Remote Practice',
    'Infection Prevention & Control',
    'Training',
    'Clinical Leadership & Shift Coordination',
    'Medication Management',
    'Multidisciplinary Collaboration',
    'Digital Health Systems',
    'Cultural Safety & Communication',
  ],

  /** Order mirrors the site's art direction, not strict chronology. */
  careerPath: [
    'Emergency',
    'Acute care',
    'Rural & remote',
    'Occupational health',
    'Clinical leadership',
    'Emergency services management',
  ],

  countries: ['Kenya', 'Australia'],
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Practice', href: '#practice' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
] as const
