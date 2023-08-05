export type LocationArea = {
  name: string
  displayName: string
  url: string
}

export const getDisplayName = (name: string) => {
  const partsOfName = name.split('-')
  const capitalized = partsOfName.map(word => word[0].toUpperCase())
  return capitalized.join(' ')
}
