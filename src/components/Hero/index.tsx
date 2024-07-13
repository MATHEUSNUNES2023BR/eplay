import { Container } from '../../style'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner>
    <Container>
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$250,00</span>
          Por R$ 190,00
        </p>
        <Button
          title="Clique aqui para adicionar o botão"
          type="button"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </Container>
  </Banner>
)
export default Hero
