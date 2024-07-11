import { Container } from '../../style'
import Product from '../Product'
import { ContainerProducts, List } from './styles'
type Props = {
  title: string
  background: 'gray' | 'black'
}

export const ProductList = ({ title, background }: Props) => (
  <Container>
    <ContainerProducts>
      <h2>{title}</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </ContainerProducts>
  </Container>
)
