import { BounceLoader } from 'react-spinners'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

import { IsLoadingMessage } from '../../styles'
import variables from '../../styles/variables'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  return (
    <>
      <Header profile={false} />
      {!restaurants ? (
        <IsLoadingMessage>
          <BounceLoader color={variables.primaryColor} />
        </IsLoadingMessage>
      ) : (
        <RestaurantList restaurants={restaurants} />
      )}
    </>
  )
}

export default Home
