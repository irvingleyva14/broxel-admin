export function highlight(text: string, query: string) {
  if (!query) return text;

  const q = query.toLowerCase();
  const t = text.toLowerCase();

  const index = t.indexOf(q);
  if (index === -1) return text;

  // Partes del texto antes, durante y después del match
  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return `${before}<mark class="bg-teal-600/40 text-teal-200 rounded px-1">${match}</mark>${after}`;
}
