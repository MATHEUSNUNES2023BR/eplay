import { Container } from '../../style'
import { ContainerProducts, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}
const Section = ({ title, background, children }: Props) => (
  <ContainerProducts background={background}>
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  </ContainerProducts>
)
export default Section
