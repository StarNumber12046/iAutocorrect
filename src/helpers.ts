export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function isStartsWithLink(text: string): boolean {
  return text.startsWith("http://") || text.startsWith("https://");
}
