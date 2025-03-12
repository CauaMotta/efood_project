declare type menuModel = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

declare type RestaurantModel = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: menuModel[]
}
