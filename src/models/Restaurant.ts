class Restaurant {
  id: number
  title: string
  note: number
  description: string
  tags: string[]
  image: string

  constructor(
    id: number,
    title: string,
    note: number,
    description: string,
    tags: string[],
    image: string
  ) {
    this.id = id
    this.title = title
    this.note = note
    this.description = description
    this.tags = tags
    this.image = image
  }
}

export default Restaurant
