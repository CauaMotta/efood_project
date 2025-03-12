import { descriptionFormatter } from '../../utils'

import * as S from './styles'

type Props = {
  restaurant: RestaurantModel
}

const Restaurant = ({ restaurant }: Props) => {
  return (
    <S.CardContainer>
      <img src={restaurant.capa} alt={restaurant.titulo} />
      <S.ContentContainer>
        <S.TitleContainer>
          <p>{restaurant.titulo}</p>
          <p>
            {restaurant.avaliacao} <i className="fa-solid fa-star"></i>
          </p>
        </S.TitleContainer>
        <S.Description>
          {descriptionFormatter(restaurant.descricao, 234)}
        </S.Description>
        <S.PerfilLink to={`/profile/${restaurant.id}`}>Saiba mais</S.PerfilLink>
        <S.TagList>
          {restaurant.destacado && <S.Tag>Destaque da semana</S.Tag>}
          <S.Tag>{restaurant.tipo}</S.Tag>
        </S.TagList>
      </S.ContentContainer>
    </S.CardContainer>
  )
}

export default Restaurant
