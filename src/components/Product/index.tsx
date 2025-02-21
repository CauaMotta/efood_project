import { BuyButton, Card, Description, Title } from './styles'

import ProductClass from '../../models/Product'

type Props = ProductClass

const Product = ({ title, description, image }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BuyButton>Adicionar ao carrinho</BuyButton>
      </div>
    </Card>
  )
}

export default Product
