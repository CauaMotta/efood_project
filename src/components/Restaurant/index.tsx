import {
  CardContainer,
  TitleContainer,
  ContentContainer,
  TagList,
  Tag,
  Description,
  PerfilLink
} from './styles'
import { RestaurantModel } from '../../pages/Home'
import descriptionFormatter from '../../utils/DescriptionFormatter'

type Props = {
  restaurant: RestaurantModel
}

const Restaurant = ({ restaurant }: Props) => {
  return (
    <CardContainer>
      <img src={restaurant.capa} alt={restaurant.titulo} />
      <ContentContainer>
        <TitleContainer>
          <p>{restaurant.titulo}</p>
          <p>
            {restaurant.avaliacao} <i className="fa-solid fa-star"></i>
          </p>
        </TitleContainer>
        <Description>
          {descriptionFormatter(restaurant.descricao, 234)}
        </Description>
        <PerfilLink to={`/profile/${restaurant.id}`}>Saiba mais</PerfilLink>
        <TagList>
          {restaurant.destacado && <Tag>Destaque da semana</Tag>}
          <Tag>{restaurant.tipo}</Tag>
        </TagList>
      </ContentContainer>
    </CardContainer>
  )
}

export default Restaurant
