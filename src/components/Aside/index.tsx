import { useDispatch, useSelector } from 'react-redux'
import { Button, Overlay } from '../../styles'
import {
  CartContainer,
  Container,
  Item,
  InputGroup,
  InputField,
  ButtonGroup
} from './styles'
import removeIcon from '/assets/remove-icon.svg'
import { RootReducer } from '../../store'
import { closeCart, removeItem } from '../../store/reducers/cart'
import priceFormatter from '../../utils/PriceFormatter'
import { useState } from 'react'

const Cart = () => {
  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acc, value) => {
      return (acc += value.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={() => dispatch(closeCart())} />
      <Container>
        {items.length === 0 && <p>O seu carrinho está vazio!</p>}
        {!delivery && !payment && !isSuccess && items.length > 0 && (
          <>
            <ul>
              {items.map((item) => (
                <Item>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{priceFormatter(item.preco)}</p>
                  </div>
                  <button
                    aria-label="remove"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <span
                      style={{ backgroundImage: `url(${removeIcon})` }}
                    ></span>
                  </button>
                </Item>
              ))}
            </ul>
            <div className="finalValue">
              <span>Valor total</span>
              <span>{priceFormatter(getTotalPrice())}</span>
            </div>
            <Button onClick={() => setDelivery(true)}>
              Continuar com a entrega
            </Button>
          </>
        )}
        <form>
          {delivery && (
            <>
              <h3>Entrega</h3>
              <InputGroup>
                <InputField>
                  <label htmlFor="">Quem irá receber</label>
                  <input type="text" />
                </InputField>
                <InputField>
                  <label htmlFor="">Endereço</label>
                  <input type="text" />
                </InputField>
                <InputField>
                  <label htmlFor="">Cidade</label>
                  <input type="text" />
                </InputField>
                <div className="numberField">
                  <InputField>
                    <label htmlFor="">CEP</label>
                    <input type="text" />
                  </InputField>
                  <InputField>
                    <label htmlFor="">Número</label>
                    <input type="text" />
                  </InputField>
                </div>
                <InputField>
                  <label htmlFor="">Complemento (opcional)</label>
                  <input type="text" />
                </InputField>
              </InputGroup>
              <ButtonGroup>
                <Button
                  type="button"
                  onClick={() => {
                    setPayment(true)
                    setDelivery(false)
                  }}
                >
                  Continuar com o pagamento
                </Button>
                <Button type="button" onClick={() => setDelivery(false)}>
                  Voltar para o carrinho
                </Button>
              </ButtonGroup>
            </>
          )}
          {payment && (
            <>
              <h3>
                Pagamento - Valor a pagar {priceFormatter(getTotalPrice())}
              </h3>
              <InputGroup>
                <InputField>
                  <label htmlFor="">Nome no cartão</label>
                  <input type="text" />
                </InputField>
                <div className="cardField">
                  <InputField>
                    <label htmlFor="">Número do cartão</label>
                    <input type="text" />
                  </InputField>
                  <InputField>
                    <label htmlFor="">CVV</label>
                    <input type="text" />
                  </InputField>
                </div>
                <div className="numberField">
                  <InputField>
                    <label htmlFor="">Mês de vencimento</label>
                    <input type="text" />
                  </InputField>
                  <InputField>
                    <label htmlFor="">Ano de Vencimento</label>
                    <input type="text" />
                  </InputField>
                </div>
              </InputGroup>
              <ButtonGroup>
                <Button
                  type="button"
                  onClick={() => {
                    setIsSuccess(true)
                    setPayment(false)
                  }}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setDelivery(true)
                    setPayment(false)
                  }}
                >
                  Voltar para a edição de endereço
                </Button>
              </ButtonGroup>
            </>
          )}
        </form>
        {isSuccess && (
          <>
            <h3>Pedido realizado - ORDER_ID</h3>
            <p className="margin-bottom">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="margin-bottom">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="margin-bottom">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <ButtonGroup>
              <Button onClick={() => setIsSuccess(false)}>Concluir</Button>
            </ButtonGroup>
          </>
        )}
      </Container>
    </CartContainer>
  )
}

export default Cart
