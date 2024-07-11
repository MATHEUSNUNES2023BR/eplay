import Tag from '../Tag'

import { Card, Descricao, Titulo } from './style'
const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
      accusantium, ducimus quisquam voluptates earum natus quibusdam eius
      pariatur magnam provident quia maxime cum, impedit veritatis officia, et
      omnis debitis eum!
    </Descricao>
  </Card>
)

export default Product
