import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'
import { IsLoadingMessage } from '../../styles'

export type menuModel = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type RestaurantModel = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: menuModel[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      {!restaurants ? (
        <IsLoadingMessage />
      ) : (
        <RestaurantList restaurants={restaurants} />
      )}
    </>
  )
}

export default Home
