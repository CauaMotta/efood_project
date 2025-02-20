import {
  CardContainer,
  TitleContainer,
  ContentContainer,
  Link,
  TagList,
  Tag,
  Description
} from './styles'
import RestaurantClass from '../../models/Restaurant'

type Props = RestaurantClass

const Restaurant = ({ title, note, description, tags, image }: Props) => (
  <CardContainer>
    <img src={image} alt={title} />
    <ContentContainer>
      <TitleContainer>
        <p>{title}</p>
        <p>
          {note} <i className="fa-solid fa-star"></i>
        </p>
      </TitleContainer>
      <Description>{description}</Description>
      <Link>Saiba mais</Link>
      <TagList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagList>
    </ContentContainer>
  </CardContainer>
)

export default Restaurant
