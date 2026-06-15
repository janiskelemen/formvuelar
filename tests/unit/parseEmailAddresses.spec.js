import { parseEmailAddresses } from '@/components/utilities/parseEmailAddresses'

describe('parseEmailAddresses', () => {
  it('parses comma-separated Name <email> format', () => {
    expect(
      parseEmailAddresses('User First <first@user.com>, User Second <second@helpspace.com>')
    ).toEqual(['first@user.com', 'second@helpspace.com'])
  })

  it('parses semicolon-separated plain emails', () => {
    expect(parseEmailAddresses('first@a.com; second@b.com')).toEqual(['first@a.com', 'second@b.com'])
  })

  it('extracts email from a single bracket-wrapped entry', () => {
    expect(parseEmailAddresses('User <only@one.com>')).toEqual(['only@one.com'])
  })

  it('returns a single plain email unchanged', () => {
    expect(parseEmailAddresses('plain@email.com')).toEqual(['plain@email.com'])
  })

  it('deduplicates addresses case-insensitively', () => {
    expect(parseEmailAddresses('First@A.com, first@a.com, SECOND@b.com')).toEqual(['First@A.com', 'SECOND@b.com'])
  })

  it('handles comma inside display name via bracket extraction', () => {
    expect(parseEmailAddresses('"Last, First" <email@x.com>')).toEqual(['email@x.com'])
  })

  it('handles mixed plain and bracket-wrapped entries', () => {
    expect(parseEmailAddresses('first@a.com, User Second <second@b.com>')).toEqual([
      'first@a.com',
      'second@b.com',
    ])
  })

  it('returns empty array for empty input', () => {
    expect(parseEmailAddresses('')).toEqual([])
    expect(parseEmailAddresses(null)).toEqual([])
  })
})
