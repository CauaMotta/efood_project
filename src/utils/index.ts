export const descriptionFormatter = (description: string, limit: number) => {
  if (description.length > limit) {
    return description.slice(0, limit) + '...'
  } else {
    return description
  }
}

export const priceFormatter = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
