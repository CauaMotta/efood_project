import Restaurant from '../../models/Restaurant'
import Product from '../Product'
import { MainContainer, Presentation, Title, Tag } from './styles'

type Props = {
  restaurant: Restaurant
}

const ProductList = ({ restaurant }: Props) => {
  return (
    <>
      <Presentation
        style={{ backgroundImage: `url(${restaurant.image}-large.png)` }}
      >
        <div>
          <Tag>{restaurant.tags[0]}</Tag>
          <Title>{restaurant.title}</Title>
        </div>
      </Presentation>
      <MainContainer>
        {restaurant.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </MainContainer>
    </>
  )
}

export default ProductList
