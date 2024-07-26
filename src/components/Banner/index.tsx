import { Imagem, Titulo, Precos } from './style'
import { Container } from '../../style'
import Tag from '../Tag'
import Button from '../Button'

import { formataPreco } from '../ProductList'
import { useGetFeaturedGameQuery } from '../services/api'
const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando</h3>
  }
  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <Container>
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            De <span> {formataPreco(game.prices.old)} </span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar está oferta"
        >
          Aproveitar
        </Button>
      </Container>
    </Imagem>
  )
}
export default Banner
