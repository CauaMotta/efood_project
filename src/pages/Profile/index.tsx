import { useParams } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Cart from '../../components/Aside'

import { useGetRestaurantProfileQuery } from '../../services/api'

import { IsLoadingMessage } from '../../styles'
import variables from '../../styles/variables'

type idParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as idParams
  const { data: restaurant } = useGetRestaurantProfileQuery(id)

  return (
    <>
      <Header profile={true} />
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
