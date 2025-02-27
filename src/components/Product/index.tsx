import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { menuModel } from '../../pages/Home'
import descriptionFormatter from '../../utils/DescriptionFormatter'
import { Card, Description, Modal, ModalContent, Title } from './styles'
import { BuyButton, Overlay } from '../../styles'
import close from '/assets/close.svg'
import priceFormatter from '../../utils/PriceFormatter'
import { addItem, openCart } from '../../store/reducers/cart'

type Props = {
  food: menuModel
}

const Product = ({ food }: Props) => {
  const [modalActive, setModalActive] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addItem(food))
    setModalActive(false)
    dispatch(openCart())
  }

  return (
    <>
      <Card>
        <img src={food.foto} alt={food.nome} />
        <div className="container">
          <Title>{food.nome}</Title>
          <Description>{descriptionFormatter(food.descricao, 150)}</Description>
          <BuyButton onClick={() => setModalActive(true)}>
            Adicionar ao carrinho
          </BuyButton>
        </div>
      </Card>

      {modalActive && (
        <Modal>
          <div className="container">
            <img src={food.foto} alt={food.nome} />
            <ModalContent>
              <Title>{food.nome}</Title>
              <Description>
                {food.descricao} <br />
                <br />
                Serve: {food.porcao}
              </Description>
              <BuyButton onClick={addToCart}>
                Adicionar ao carrinho - {priceFormatter(food.preco)}
              </BuyButton>
            </ModalContent>
            <button aria-label="Close" onClick={() => setModalActive(false)}>
              <span style={{ backgroundImage: `url(${close})` }}></span>
            </button>
          </div>
          <Overlay onClick={() => setModalActive(false)} />
        </Modal>
      )}
    </>
  )
}

export default Product
