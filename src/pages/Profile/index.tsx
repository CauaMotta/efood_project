import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Cart from '../../components/Aside'
import { useGetRestaurantProfileQuery } from '../../services/api'
import { IsLoadingMessage } from '../../styles'
import { BounceLoader } from 'react-spinners'
import variables from '../../styles/variables'

const Profile = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantProfileQuery(id!)

  return (
    <>
      <Header profile />
      {!restaurant ? (
        <IsLoadingMessage>
          <BounceLoader color={variables.primaryColor} />
        </IsLoadingMessage>
      ) : (
        <ProductList restaurant={restaurant} />
      )}
      <Cart />
    </>
  )
}

export default Profile
