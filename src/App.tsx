import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'
import store from './store'

import { GlobalStyle } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
