import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { RestaurantModel } from '../Home'
import { useEffect, useState } from 'react'

const Profile = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantModel>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) return <h1>Carregando...</h1>

  return (
    <>
      <Header profile />
      <ProductList restaurant={restaurant} />
    </>
  )
}

export default Profile
