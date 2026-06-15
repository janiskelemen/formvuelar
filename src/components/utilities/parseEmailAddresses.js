export function parseEmailAddresses(text) {
  if (!text || typeof text !== 'string') return []

  const parts = text
    .trim()
    .split(/[,;]+/)
    .map((part) => part.trim())
    .filter(Boolean)

  const emails = parts.map((part) => {
    const match = part.match(/<([^<>@\s]+@[^<>\s]+)>/)
    return match ? match[1].trim() : part
  })

  const seen = new Set()
  return emails.filter((email) => {
    const key = email.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
