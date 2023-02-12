const LINK_REGEX =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?/i;

export function capitalize(text: string): string {
  return "i" + text.charAt(0).toUpperCase() + text.slice(1);
}

export function isStartsWithLink(text: string): boolean {
  console.log(text);
  return LINK_REGEX.test(text);
}
