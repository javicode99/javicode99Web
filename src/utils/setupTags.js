// Esta seccion de codigo hace que los tags aumenten segun la cantidad de
// Blogs con esta etiqueta se encuentre.

const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(element => {
    element.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firsTag] = a
    const [secondTag] = b

    return firsTag.localeCompare(secondTag)
  })
  return newTags
}

export default setupTags
