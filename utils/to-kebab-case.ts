/**
 * Converts a string toLowerCase() with hyphens.
 * @returns string
 */
export function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
