import { HeaderContainer, Slogan } from './styles'

import backgroundImage from '../../assets/images/header-background.png'
import efoodLogo from '../../assets/images/efood-logo.svg'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
    <img src={efoodLogo} alt="Efood" />
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </HeaderContainer>
)

export default Header
