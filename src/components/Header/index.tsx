import { useNavigate } from 'react-router-dom'

import { HeaderContainer, NavButton, Slogan, Container } from './styles'
import backgroundImage from '../../assets/images/header-background.png'
import efoodLogo from '../../assets/images/efood-logo.svg'

export type Props = {
  profile?: boolean
}

const Header = ({ profile }: Props) => {
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
          <NavButton>0 produto(s) no carrinho</NavButton>
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
