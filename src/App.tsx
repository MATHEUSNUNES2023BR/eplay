import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss, Container } from './style'
import Rotas from './components/routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
