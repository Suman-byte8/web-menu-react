/** URL for a file in /public/images. encodeURI handles names with spaces. */
export function publicImage(file) {
  return `/images/${encodeURI(file)}`
}
