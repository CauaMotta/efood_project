import Product from '../Product'

import { MainContainer, Presentation, Title, Tag } from './styles'

type Props = {
  restaurant: RestaurantModel
}

const ProductList = ({ restaurant }: Props) => {
  return (
    <>
      <Presentation style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div>
          <Tag>{restaurant.tipo}</Tag>
          <Title>{restaurant.titulo}</Title>
        </div>
      </Presentation>
      <MainContainer>
        {restaurant.cardapio.map((product) => (
          <Product key={product.id} food={product} />
        ))}
      </MainContainer>
    </>
  )
}

export default ProductList
