export function splitStatusText (text) {
  const split = text.split('$$')
  return {
    summary: split[0],
    details: split[1]
  }
}
