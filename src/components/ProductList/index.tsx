import Game from '../../models/Game'
import { Container } from '../../style'
import Product from '../Product'
import { ContainerProducts, List } from './styles'
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const ProductList = ({ title, background, games }: Props) => (
  <ContainerProducts background={background}>
    <Container>
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </Container>
  </ContainerProducts>
)
