import { Container } from '../../style'
import Product from '../Product'
import { ContainerProducts, List } from './styles'
export type Props = {
  title: string
  background: 'gray' | 'black'
}

export const ProductList = ({ title, background }: Props) => (
  <ContainerProducts background={background}>
    <Container>
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />

        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />

        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />

        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
      </List>
    </Container>
  </ContainerProducts>
)
