const descriptionFormatter = (description: string, limit: number) => {
  if (description.length > limit) {
    return description.slice(0, limit) + '...'
  } else {
    return description
  }
}

export default descriptionFormatter
