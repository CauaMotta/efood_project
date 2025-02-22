import efoodLogo from '/assets/images/efood-logo.svg'
import facebook from '/assets/images/facebook.svg'
import instagram from '/assets/images/instagram.svg'
import twitter from '/assets/images/twitter.svg'
import { FooterContainer, SocialList } from './styles'

const Footer = () => (
  <FooterContainer>
    <div>
      <img src={efoodLogo} alt="Efood" />
      <SocialList>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </SocialList>
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
