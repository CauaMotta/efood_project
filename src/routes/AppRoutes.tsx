import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

const AppRoutes = () => {
  const { restaurants } = useSelector(
    ({ restaurant }: RootReducer) => restaurant
  )

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {restaurants.map((restaurant) => (
        <Route
          path={restaurant.perfil}
          element={<Profile restaurant={restaurant} />}
        />
      ))}
    </Routes>
  )
}

export default AppRoutes
