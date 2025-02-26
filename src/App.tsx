import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import store from './store'

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
