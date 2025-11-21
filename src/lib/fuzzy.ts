export function fuzzyMatch(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}
