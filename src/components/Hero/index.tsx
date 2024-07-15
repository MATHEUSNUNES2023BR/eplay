import { Game } from '../../pages/Home'
import { Container } from '../../style'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { formataPreco } from '../ProductList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <Container>
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <>
              <span> De {formataPreco(game.prices.old)} </span>
              <br />
            </>
          )}
          {game.prices.current && (
            <>Por apenas {formataPreco(game.prices.current)}</>
          )}
        </p>
        {game.prices.current && (
          <Button
            title="Clique aqui para adicionar o botão"
            type="button"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </Container>
  </Banner>
)
export default Hero
