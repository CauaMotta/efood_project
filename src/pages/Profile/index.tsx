import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Restaurant from '../../models/Restaurant'

type Props = {
  restaurant: Restaurant
}

const Profile = ({ restaurant }: Props) => (
  <>
    <Header profile />
    <ProductList restaurant={restaurant} />
  </>
)

export default Profile
