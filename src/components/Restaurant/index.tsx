import {
  CardContainer,
  TitleContainer,
  ContentContainer,
  TagList,
  Tag,
  Description,
  PerfilLink
} from './styles'
import RestaurantClass from '../../models/Restaurant'

type Props = RestaurantClass

const Restaurant = ({
  title,
  note,
  description,
  tags,
  image,
  perfil
}: Props) => (
  <CardContainer>
    <img src={`${image}.png`} alt={title} />
    <ContentContainer>
      <TitleContainer>
        <p>{title}</p>
        <p>
          {note} <i className="fa-solid fa-star"></i>
        </p>
      </TitleContainer>
      <Description>{description}</Description>
      <PerfilLink to={perfil}>Saiba mais</PerfilLink>
      <TagList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagList>
    </ContentContainer>
  </CardContainer>
)

export default Restaurant
