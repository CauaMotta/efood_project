import { BuyButton, Card, Description, Title } from './styles'

import pizzaMarguerita from '../../assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
import ProductClass from '../../models/Product'

type Props = {
  product: ProductClass
}

const Product = ({ product }: Props) => {
  return (
    <Card>
      <img src={pizzaMarguerita} alt="" />
      <div>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <BuyButton>Adicionar ao carrinho</BuyButton>
      </div>
    </Card>
  )
}

export default Product
