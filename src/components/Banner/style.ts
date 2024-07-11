import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Container } from '../../style'

export const Imagem = styled.div`
  width: 100%;
  height: 540px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`
export const Titulo = styled.h2`
  padding-top: 340px;
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
