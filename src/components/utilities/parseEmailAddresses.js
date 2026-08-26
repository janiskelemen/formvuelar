export function parseEmailAddresses(text) {
  if (!text || typeof text !== 'string') return []

  const emails = text.match(/[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)+/g) || []

  const seen = new Set()
  return emails.filter((email) => {
    const key = email.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
