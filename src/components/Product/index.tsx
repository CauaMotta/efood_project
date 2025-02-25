import { menuModel } from '../../pages/Home'
import descriptionLimiter from '../../utils/DescriptionFormatter'
import { BuyButton, Card, Description, Title } from './styles'

type Props = menuModel

const Product = ({ id, nome, foto, descricao, preco, porcao }: Props) => {
  return (
    <Card>
      <img src={foto} alt={nome} />
      <div className="container">
        <Title>{nome}</Title>
        <Description>{descriptionLimiter(descricao, 150)}</Description>
        <BuyButton>Adicionar ao carrinho</BuyButton>
      </div>
    </Card>
  )
}

export default Product
