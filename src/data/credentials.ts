/** Education, registration, memberships and certifications. Source: the résumé. */

export interface Qualification {
  id: string
  title: string
  institution: string
  year: string
  country: 'Kenya' | 'Australia'
}

export const education: Qualification[] = [
  {
    id: 'edu-ecu',
    title: 'Bachelor of Science in Nursing',
    institution: 'Edith Cowan University',
    year: '2019',
    country: 'Australia',
  },
  {
    id: 'edu-kemu',
    title: 'BSc (Hons) Health Systems Management',
    institution: 'Kenya Methodist University',
    year: '2013',
    country: 'Kenya',
  },
  {
    id: 'edu-knh',
    title: 'Higher Diploma, Accident & Emergency Nursing',
    institution: 'KNH School of Nursing',
    year: '2006',
    country: 'Kenya',
  },
  {
    id: 'edu-kmtc',
    title: 'Registered Community Health Nursing',
    institution: 'KMTC',
    year: '1998',
    country: 'Kenya',
  },
]

export interface Credential {
  name: string
  issuer?: string
}

/** Listed exactly as in the résumé's "Registration & Memberships". */
export const registrations: Credential[] = [
  { name: 'Registered Nurse', issuer: 'Nursing and Midwifery Board of Australia (NMBA)' },
  { name: 'Australian Nursing Federation' },
  { name: 'Nursing Council of Kenya' },
  { name: 'Kenya Council of Emergency Medical Technicians' },
  { name: 'BLS & ACLS Instructor', issuer: 'American Heart Association (AHA)' },
]

export const certifications: Credential[] = [
  { name: 'Adult & Paediatric BLS/ALS' },
  { name: 'Remote Emergency Care', issuer: 'CRANA Plus' },
  { name: 'Infection Prevention & Control', issuer: 'ACIPC / WACHS' },
  { name: 'WHS Certificate IV' },
  { name: 'Manual Handling' },
  { name: 'Fire Safety' },
  { name: 'PPE' },
  { name: 'First Aid' },
  { name: 'CPR' },
  { name: 'Managing Workplace Aggression & Violence' },
]
