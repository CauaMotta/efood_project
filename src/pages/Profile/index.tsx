import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Cart from '../../components/Cart'
import { useGetRestaurantProfileQuery } from '../../services/api'
import { IsLoadingMessage } from '../../styles'

const Profile = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantProfileQuery(id!)

  return (
    <>
      <Header profile />
      {!restaurant ? (
        <IsLoadingMessage />
      ) : (
        <ProductList restaurant={restaurant} />
      )}
      <Cart />
    </>
  )
}

export default Profile
