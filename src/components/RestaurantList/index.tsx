import Restaurant from '../Restaurant'
import { MainContainer } from './styles'
import { RestaurantModel } from '../../pages/Home'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <MainContainer>
    {restaurants.map((restaurant) => (
      <Restaurant key={restaurant.id} restaurant={restaurant} />
    ))}
  </MainContainer>
)

export default RestaurantList
