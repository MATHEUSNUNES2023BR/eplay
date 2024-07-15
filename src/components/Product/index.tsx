import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos, LinkContainer } from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }
  return (
    <LinkContainer to={`/product/${id}`}>
      <Card>
        <img src={image} alt={title} />
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <Titulo>{title}</Titulo>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <Descricao>{getDescricao(description)}</Descricao>
      </Card>
    </LinkContainer>
  )
}

export default Product
