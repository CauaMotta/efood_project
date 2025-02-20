import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
