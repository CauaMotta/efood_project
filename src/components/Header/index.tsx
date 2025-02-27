import { useNavigate } from 'react-router-dom'

import { HeaderContainer, NavButton, Slogan, Container } from './styles'
import backgroundImage from '/assets/header-background.png'
import efoodLogo from '/assets/efood-logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  profile?: boolean
}

const Header = ({ profile }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (profile) {
    return (
      <HeaderContainer
        profile={profile}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Container>
          <NavButton onClick={() => navigate('/')}>Restaurantes</NavButton>
          <img src={efoodLogo} alt="Efood" />
          <NavButton onClick={() => dispatch(openCart())}>
            {items.length} produto(s) no carrinho
          </NavButton>
        </Container>
      </HeaderContainer>
    )
  }
  return (
    <HeaderContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={efoodLogo} alt="Efood" />
      <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
    </HeaderContainer>
  )
}

export default Header
