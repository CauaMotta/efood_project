import Product from './Product'

class Restaurant {
  id: number
  title: string
  note: number
  description: string
  tags: string[]
  image: string
  perfil: string
  products: Product[]

  constructor(
    id: number,
    title: string,
    note: number,
    description: string,
    tags: string[],
    image: string,
    perfil: string,
    products: Product[]
  ) {
    this.id = id
    this.title = title
    this.note = note
    this.description = description
    this.tags = tags
    this.image = image
    this.perfil = perfil
    this.products = products
  }
}

export default Restaurant
