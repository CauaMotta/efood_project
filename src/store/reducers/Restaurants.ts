import { createSlice } from '@reduxjs/toolkit'
import Restaurant from '../../models/Restaurant'

type RestaurantState = {
  restaurants: Restaurant[]
}

const initialState: RestaurantState = {
  restaurants: [
    {
      id: 1,
      title: 'Hioki Sushi',
      note: 4.9,
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
      tags: ['Japonesa', 'Destaque da Semana'],
      image: './public/assets/images/hioki-sushi',
      perfil: '/hioki-sushi',
      products: [
        {
          id: 1,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 2,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 3,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 4,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 5,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 6,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        }
      ]
    },
    {
      id: 2,
      title: 'La Dolce Vita Trattoria',
      note: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      tags: ['Italiana'],
      image: './public/assets/images/la-dolce-vita-trattoria',
      perfil: '/la-dolce-vita-trattoria',
      products: [
        {
          id: 1,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 2,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 3,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 4,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 5,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 6,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        }
      ]
    },
    {
      id: 3,
      title: 'La Dolce Vita Trattoria',
      note: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      tags: ['Italiana'],
      image: './public/assets/images/la-dolce-vita-trattoria',
      perfil: '/la-dolce-vita-trattoria',
      products: [
        {
          id: 1,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 2,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 3,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 4,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 5,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 6,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        }
      ]
    },
    {
      id: 4,
      title: 'La Dolce Vita Trattoria',
      note: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      tags: ['Italiana'],
      image: './public/assets/images/la-dolce-vita-trattoria',
      perfil: '/la-dolce-vita-trattoria',
      products: [
        {
          id: 1,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 2,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 3,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 4,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 5,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 6,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        }
      ]
    },
    {
      id: 5,
      title: 'La Dolce Vita Trattoria',
      note: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      tags: ['Italiana'],
      image: './public/assets/images/la-dolce-vita-trattoria',
      perfil: '/la-dolce-vita-trattoria',
      products: [
        {
          id: 1,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 2,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 3,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 4,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 5,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 6,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        }
      ]
    },
    {
      id: 6,
      title: 'La Dolce Vita Trattoria',
      note: 4.6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      tags: ['Italiana'],
      image: './public/assets/images/la-dolce-vita-trattoria',
      perfil: '/la-dolce-vita-trattoria',
      products: [
        {
          id: 1,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 2,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 3,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 4,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 5,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        },
        {
          id: 6,
          title: 'Pizza Marguerita',
          description:
            'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
          image:
            './public/assets/images/la-dolce-vita-trattoria-products/pizza-marguerita.png'
        }
      ]
    }
  ]
}

const RestaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {}
})

export default RestaurantSlice.reducer
