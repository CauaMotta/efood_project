import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import RestaurantClass from '../../models/Restaurant'
import HiokiSushi from '../../assets/images/hioki-sushi.png'
import LaDolce from '../../assets/images/la-dolce-vita-trattoria.png'

const restaurants: RestaurantClass[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['Destaque da Semana', 'Japonesa'],
    image: HiokiSushi
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    image: LaDolce
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    image: LaDolce
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    image: LaDolce
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    image: LaDolce
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    image: LaDolce
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurants} />
  </>
)

export default Home
