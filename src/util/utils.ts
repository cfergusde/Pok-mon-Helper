
// Exmaple of sanitization. We do this a lot to make strings consistent
export const sanitizeStr = (str: string) => {
  return str.toLowerCase().replace(' ','-')
}