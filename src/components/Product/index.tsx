import { useState } from 'react'
import { menuModel } from '../../pages/Home'
import descriptionFormatter from '../../utils/DescriptionFormatter'
import {
  BuyButton,
  Card,
  Description,
  Modal,
  ModalContent,
  Overlay,
  Title
} from './styles'
import close from '/assets/close.svg'
import priceFormatter from '../../utils/PriceFormatter'

type Props = menuModel

const Product = ({ nome, foto, descricao, preco, porcao }: Props) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <Card onClick={() => setModalActive(true)}>
        <img src={foto} alt={nome} />
        <div className="container">
          <Title>{nome}</Title>
          <Description>{descriptionFormatter(descricao, 150)}</Description>
          <BuyButton>Adicionar ao carrinho</BuyButton>
        </div>
      </Card>

      {modalActive && (
        <Modal>
          <div className="container">
            <img src={foto} alt={nome} />
            <ModalContent>
              <Title>{nome}</Title>
              <Description>
                {descricao} <br />
                <br />
                Serve: {porcao}
              </Description>
              <BuyButton>
                Adicionar ao carrinho - R$ {priceFormatter(preco)}
              </BuyButton>
            </ModalContent>
            <button aria-label="Close" onClick={() => setModalActive(false)}>
              <span style={{ backgroundImage: `url(${close})` }}></span>
            </button>
          </div>
          <Overlay onClick={() => setModalActive(false)}></Overlay>
        </Modal>
      )}
    </>
  )
}

export default Product
