import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { descriptionFormatter, priceFormatter } from '../../utils'
import { addItem, openCart } from '../../store/reducers/cart'

import { Card, Description, Modal, ModalContent, Title } from './styles'
import { Button, Overlay } from '../../styles'
import close from '/assets/close.svg'

type Props = {
  food: menuModel
}

const Product = ({ food }: Props) => {
  const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState(false)

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
          <Button onClick={() => setModalActive(true)}>
            Adicionar ao carrinho
          </Button>
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
              <Button onClick={addToCart}>
                Adicionar ao carrinho - {priceFormatter(food.preco)}
              </Button>
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
