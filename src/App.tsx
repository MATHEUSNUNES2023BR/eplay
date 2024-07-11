import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss, Container } from './style'
import { ProductList } from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList background="gray" title="Promoções" />
        <ProductList background="black" title="Em breve" />
      </>
    )
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
