import { useDispatch, useSelector } from 'react-redux'
import { BuyButton, Overlay } from '../../styles'
import { CartContainer, CartContent, Item } from './styles'
import removeIcon from '/assets/remove-icon.svg'
import { RootReducer } from '../../store'
import { closeCart, removeItem } from '../../store/reducers/cart'
import priceFormatter from '../../utils/PriceFormatter'

const Cart = () => {
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
      <CartContent>
        {items.length === 0 && <p>O seu carrinho está vazio!</p>}
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
                <span style={{ backgroundImage: `url(${removeIcon})` }}></span>
              </button>
            </Item>
          ))}
        </ul>
        <div className="finalValue">
          <p>Valor total</p>
          <p>{priceFormatter(getTotalPrice())}</p>
        </div>
        <BuyButton>Continuar com a entrega</BuyButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
