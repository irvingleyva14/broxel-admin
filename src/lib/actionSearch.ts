export function matchAction(action: string, query: string) {
  return action.toLowerCase().includes(query.toLowerCase());
}
