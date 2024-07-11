import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss, Container } from './style'
import Rotas from './components/routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
