import RestaurantClass from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import { MainContainer } from './styles'

type Props = {
  restaurants: RestaurantClass[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <MainContainer>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        id={restaurant.id}
        title={restaurant.title}
        note={restaurant.note}
        description={restaurant.description}
        tags={restaurant.tags}
        image={restaurant.image}
        perfil={restaurant.perfil}
      />
    ))}
  </MainContainer>
)

export default RestaurantList
