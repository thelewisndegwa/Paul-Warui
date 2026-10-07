/**
 * Professional experience. Source of truth: the résumé.
 * `responsibilities` are the résumé bullets; `summary` is a one-line
 * condensation of those bullets and must not introduce new claims.
 */
export type Setting =
  | 'Emergency'
  | 'Acute care'
  | 'Rural & remote'
  | 'Aged care'
  | 'Occupational health'
  | 'Leadership'
  | 'Emergency services'
  | 'Primary & community health'

export interface Role {
  id: string
  title: string
  organisation: string
  /** For agency practice: the list of agencies. */
  organisations?: string[]
  location: string
  country: 'Kenya' | 'Australia'
  start: string
  end: string | 'Present'
  /** Display string, e.g. "1999 – 2008" */
  period: string
  /** Large year shown on the timeline. */
  timelineYear: string
  settings: Setting[]
  summary: string
  responsibilities: string[]
  systems?: string[]
}

export const roles: Role[] = [
  {
    id: 'role-congress',
    title: 'Registered Nurse — RAN Remote',
    organisation: 'Central Australia Aboriginal Congress',
    location: 'Central Australia',
    country: 'Australia',
    start: 'May 2026',
    end: 'Present',
    period: 'May 2026 – Present',
    timelineYear: '2026',
    settings: ['Rural & remote', 'Primary & community health', 'Emergency'],
    summary:
      'Remote area nursing spanning chronic disease, immunisation, child and maternal health, men’s, youth and women’s health, and acute and emergency presentations.',
    responsibilities: [
      'Chronic disease management',
      'Immunisations',
      'Child & maternal health',
      'Men’s, youth & women’s health',
      'Acute presentations & emergency care',
    ],
  },
  {
    id: 'role-agency',
    title: 'Registered Nurse — Agency Practice',
    organisation: 'Agency practice',
    organisations: [
      'Zenith Search',
      'Auscare Staffing Agency',
      'Smarthealth',
      'Workforce Extensions',
      'TJ Healthcare',
      'My Flex Health',
      'Edwards & Co',
    ],
    location: 'Western Australia & Northern Territory',
    country: 'Australia',
    start: '2023',
    end: 'Present',
    period: '2023 – Present',
    timelineYear: '2023',
    settings: ['Aged care', 'Rural & remote', 'Leadership'],
    summary:
      'RN services across residential aged care and rural/remote facilities in WA and NT, frequently as RN in Charge for nights and after-hours.',
    responsibilities: [
      'Provides RN services across RACFs and rural/remote facilities in WA and NT.',
      'Frequently acts as RN in Charge for nights and after-hours.',
      'Leads outbreak responses and IPC measures.',
      'Completes assessments, care plans, and clinical reviews.',
      'Uses systems including iCare, Bestmed, TCM, Autumncare, Lee Care and Communicare.',
    ],
    systems: ['iCare', 'Bestmed', 'TCM', 'Autumncare', 'Lee Care', 'Communicare'],
  },
  {
    id: 'role-wachs',
    title: 'Registered Nurse (Casual)',
    organisation: 'WA Country Health Service (WACHS)',
    location: 'Western Australia',
    country: 'Australia',
    start: '2022',
    end: 'Present',
    period: '2022 – Present',
    timelineYear: '2022',
    settings: ['Acute care', 'Emergency', 'Rural & remote', 'Leadership'],
    summary:
      'Evidence-based care in ward and emergency department settings, with shift coordination, staff supervision and contribution to telehealth, audits and quality improvement.',
    responsibilities: [
      'Delivers evidence-based care in wards and ED settings.',
      'Coordinates shifts and supports staff supervision.',
      'Escalates clinical deterioration and collaborates with multidisciplinary teams.',
      'Contributes to telehealth, audits, and quality improvement.',
    ],
  },
  {
    id: 'role-moonya',
    title: 'Registered Nurse',
    organisation: 'Baptistcare Moonya RACF',
    location: 'Manjimup, WA',
    country: 'Australia',
    start: '2020',
    end: '2023',
    period: '2020 – 2023',
    timelineYear: '2020',
    settings: ['Aged care', 'Leadership'],
    summary:
      'Clinical care, medication management and documentation in residential aged care, leading IPC and COVID-19 preparedness and supervising ENs and care staff.',
    responsibilities: [
      'Managed clinical care, medications, and documentation.',
      'Led IPC and COVID-19 preparedness, including staff training.',
      'Supervised ENs and care staff.',
      'Coordinated admissions, transfers, and GP/allied health reviews.',
    ],
  },
  {
    id: 'role-avenue',
    title: 'General Manager',
    organisation: 'Avenue Rescue Services',
    location: 'Kenya',
    country: 'Kenya',
    start: '2014',
    end: '2018',
    period: '2014 – 2018',
    timelineYear: '2014',
    settings: ['Emergency services', 'Leadership'],
    summary:
      'Organisational leadership of an ambulance service: operations, EMT training, clinical quality, budgeting, service expansion and stakeholder engagement.',
    responsibilities: [
      'Oversaw ambulance operations, EMT training, and clinical quality.',
      'Managed budgeting, service expansion, and stakeholder engagement.',
    ],
  },
  {
    id: 'role-worldbank',
    title: 'Occupational Health Nurse',
    organisation: 'World Bank Group',
    location: 'Africa Region',
    country: 'Kenya',
    start: '2008',
    end: '2014',
    period: '2008 – 2014',
    timelineYear: '2008',
    settings: ['Occupational health', 'Emergency services'],
    summary:
      'Coordination of medical care, evacuations and emergency response, alongside wellness programs, travel health and chronic disease support.',
    responsibilities: [
      'Coordinated medical care, evacuations, and emergency response.',
      'Delivered wellness programs, travel health and chronic disease support.',
    ],
  },
  {
    id: 'role-knh',
    title: 'Registered Nurse — Accident & Emergency',
    organisation: 'Kenyatta National Hospital',
    location: 'Kenya',
    country: 'Kenya',
    start: '1999',
    end: '2008',
    period: '1999 – 2008',
    timelineYear: '1999',
    settings: ['Emergency', 'Acute care'],
    summary:
      'High-acuity emergency care, triage and resuscitation, with mentoring of nursing students and support for disaster response.',
    responsibilities: [
      'Provided high-acuity emergency care, triage, and resuscitation.',
      'Mentored nursing students and supported disaster response.',
    ],
  },
]

/** Most recent first (as in the résumé). */
export const rolesByRecency = roles

/** Oldest first, for the timeline. */
export const rolesChronological = [...roles].reverse()

export const currentRole = roles[0]

export const clinicalSystems = [
  'iCare',
  'Bestmed',
  'TCM',
  'Autumncare',
  'Lee Care',
  'Communicare',
]
