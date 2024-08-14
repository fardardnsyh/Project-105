export function parseAndCapitalize(str: string): string {
  const words = str.trim().split(/\s+/);

  if (words.length === 0) {
    return "";
  }

  const firstChar = words[0].charAt(0).toUpperCase();

  if (words.length === 1) {
    return firstChar;
  }

  const lastChar = words[words.length - 1].charAt(0).toUpperCase();

  return firstChar + lastChar;
}
