/**
 * Thematic groupings of résumé content. Every bullet below is drawn from a
 * specific role or credential; `sources` records which ones.
 */

export interface PracticeArea {
  id: string
  index: string
  title: string
  lede: string
  points: string[]
  /** Role ids this area is grounded in. */
  sources: string[]
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'acute-emergency',
    index: '01',
    title: 'Acute & emergency',
    lede: 'High-acuity emergency care, triage, resuscitation and acute presentations.',
    points: [
      'Accident & Emergency nursing at Kenyatta National Hospital over nine years',
      'Evidence-based care in ward and ED settings with WA Country Health Service',
      'Escalation of clinical deterioration within multidisciplinary teams',
      'Acute presentations and emergency care in a remote setting',
    ],
    sources: ['role-knh', 'role-wachs', 'role-congress'],
  },
  {
    id: 'rural-remote',
    index: '02',
    title: 'Rural & remote',
    lede: 'Remote nursing, rural facilities, telehealth and complex care environments.',
    points: [
      'Remote area nursing with Central Australia Aboriginal Congress',
      'RN services across rural and remote facilities in WA and NT',
      'Contribution to telehealth with WA Country Health Service',
      'Remote Emergency Care certification through CRANA Plus',
    ],
    sources: ['role-congress', 'role-agency', 'role-wachs'],
  },
  {
    id: 'occupational-health',
    index: '03',
    title: 'Occupational health',
    lede: 'Medical coordination, evacuations, emergency response, wellness programs, travel health and chronic disease support.',
    points: [
      'Six years as Occupational Health Nurse with the World Bank Group, Africa Region',
      'Coordination of medical care, evacuations and emergency response',
      'Wellness programs, travel health and chronic disease support',
      'WHS Certificate IV',
    ],
    sources: ['role-worldbank'],
  },
  {
    id: 'aged-care',
    index: '04',
    title: 'Aged care',
    lede: 'Clinical care, medication management, assessments, care planning, clinical reviews and multidisciplinary coordination.',
    points: [
      'Clinical care, medications and documentation at Baptistcare Moonya RACF',
      'Assessments, care plans and clinical reviews across RACFs in WA and NT',
      'Coordination of admissions, transfers and GP/allied health reviews',
      'IPC and COVID-19 preparedness, including staff training',
    ],
    sources: ['role-moonya', 'role-agency'],
  },
  {
    id: 'leadership',
    index: '05',
    title: 'Leadership',
    lede: 'Shift coordination, staff supervision, RN-in-Charge responsibilities, training and clinical quality.',
    points: [
      'RN in Charge for nights and after-hours in agency practice',
      'Shift coordination and staff supervision with WACHS',
      'Supervision of ENs and care staff',
      'General management of an ambulance service in Kenya',
    ],
    sources: ['role-agency', 'role-wachs', 'role-moonya', 'role-avenue'],
  },
]

export interface LeadershipItem {
  label: string
  context: string
}

export const leadershipWithinTeams: LeadershipItem[] = [
  { label: 'RN in Charge, nights and after-hours', context: 'Agency practice · 2023 – Present' },
  { label: 'Shift coordination and staff supervision', context: 'WA Country Health Service · 2022 – Present' },
  { label: 'Supervision of ENs and care staff', context: 'Baptistcare Moonya RACF · 2020 – 2023' },
  { label: 'Led IPC and COVID-19 preparedness, including staff training', context: 'Baptistcare Moonya RACF · 2020 – 2023' },
  { label: 'Leads outbreak responses and IPC measures', context: 'Agency practice · 2023 – Present' },
  { label: 'Mentored nursing students', context: 'Kenyatta National Hospital · 1999 – 2008' },
]

export const leadershipOrganisational: LeadershipItem[] = [
  { label: 'Oversight of ambulance operations', context: 'Avenue Rescue Services · 2014 – 2018' },
  { label: 'EMT training and clinical quality', context: 'Avenue Rescue Services · 2014 – 2018' },
  { label: 'Budgeting and service expansion', context: 'Avenue Rescue Services · 2014 – 2018' },
  { label: 'Stakeholder engagement', context: 'Avenue Rescue Services · 2014 – 2018' },
  { label: 'Coordination of medical care, evacuations and emergency response', context: 'World Bank Group · 2008 – 2014' },
]

export interface EmergencyRecord {
  setting: string
  organisation: string
  period: string
  detail: string
}

export const emergencyRecords: EmergencyRecord[] = [
  {
    setting: 'Accident & Emergency',
    organisation: 'Kenyatta National Hospital',
    period: '1999 – 2008',
    detail: 'High-acuity emergency care, triage and resuscitation. Supported disaster response.',
  },
  {
    setting: 'Evacuation & emergency response',
    organisation: 'World Bank Group, Africa Region',
    period: '2008 – 2014',
    detail: 'Coordinated medical care, evacuations and emergency response.',
  },
  {
    setting: 'Ambulance operations',
    organisation: 'Avenue Rescue Services, Kenya',
    period: '2014 – 2018',
    detail: 'Oversaw ambulance operations, EMT training and clinical quality as General Manager.',
  },
  {
    setting: 'Emergency department',
    organisation: 'WA Country Health Service',
    period: '2022 – Present',
    detail: 'Evidence-based care in ward and ED settings; escalation of clinical deterioration.',
  },
  {
    setting: 'Remote acute presentations',
    organisation: 'Central Australia Aboriginal Congress',
    period: 'May 2026 – Present',
    detail: 'Acute presentations and emergency care within a remote area nursing role.',
  },
]

export const emergencyCredentials: string[] = [
  'AHA BLS & ACLS Instructor',
  'Adult & Paediatric BLS/ALS',
  'Remote Emergency Care — CRANA Plus',
  'Kenya Council of Emergency Medical Technicians',
  'Higher Diploma, Accident & Emergency Nursing — KNH School of Nursing, 2006',
]

export interface ApproachPoint {
  title: string
  body: string
}

export const approach: ApproachPoint[] = [
  {
    title: 'Evidence-based care and clinical governance',
    body: 'Practice grounded in NMBA standards and WACHS frameworks, with contribution to audits and quality improvement.',
  },
  {
    title: 'Infection prevention and control',
    body: 'Led IPC and COVID-19 preparedness in residential aged care and leads outbreak responses in agency practice. ACIPC/WACHS certified.',
  },
  {
    title: 'Cultural safety and communication',
    body: 'Practice across Kenyan and Australian health systems, currently in remote Central Australia. English and Swahili.',
  },
  {
    title: 'Multidisciplinary collaboration',
    body: 'Escalation of clinical deterioration, coordination of GP and allied health reviews, and work within multidisciplinary teams.',
  },
  {
    title: 'Adaptability across complex environments',
    body: 'Emergency, acute, aged care, occupational health and rural/remote settings, in clinical and management roles.',
  },
]
