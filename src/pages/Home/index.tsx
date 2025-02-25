import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

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
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res)
      })
  }, [])

  useEffect(() => {
    console.log(restaurants)
  }, [restaurants])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
