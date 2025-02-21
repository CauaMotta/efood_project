import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { RootReducer } from '../../store'

const Home = () => {
  const { restaurants } = useSelector(
    ({ restaurant }: RootReducer) => restaurant
  )

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
