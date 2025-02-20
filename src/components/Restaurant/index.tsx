import {
  CardContainer,
  TitleContainer,
  ContentContainer,
  Link,
  TagList,
  Tag,
  Description
} from './styles'
import hiokiSushi from '../../assets/images/hioki-sushi.png'

const Restaurant = () => (
  <CardContainer>
    <img src={hiokiSushi} alt="" />
    <ContentContainer>
      <TitleContainer>
        <p>Nome do Restaurante</p>
        <p>
          4.9 <i className="fa-solid fa-star"></i>
        </p>
      </TitleContainer>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. <br />
        Experimente o Japão sem sair do lar com nosso delivery!
      </Description>
      <Link>Saiba mais</Link>
      <TagList>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
      </TagList>
    </ContentContainer>
  </CardContainer>
)

export default Restaurant
