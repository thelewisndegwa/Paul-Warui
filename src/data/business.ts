/**
 * Registered business. Source of truth: ASIC Record of Registration for
 * Business Name, issued 5 October 2026.
 *
 * The record also lists a residential / principal place of business street
 * address. That is deliberately not published here.
 */
export const business = {
  name: 'HealthFirst Nursing Services',
  /** As it appears on the ASIC register. */
  registeredName: 'HEALTHFIRST NURSING SERVICES',
  abn: '82 135 963 413',
  abnRaw: '82135963413',
  registrar: 'Australian Securities and Investments Commission (ASIC)',
  registrationDate: '5 October 2026',
  registrationYear: '2026',
  nextRenewal: '5 October 2029',
  status: 'Registered',
  holder: 'Paul Warui',
  holderType: 'Individual',
  location: 'Western Australia',
  email: 'pwaruik@gmail.com',
} as const
