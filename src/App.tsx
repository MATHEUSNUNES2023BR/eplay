import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss, Container } from './style'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])
function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
