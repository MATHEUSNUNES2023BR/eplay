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
  z-index: 1;
  ${TagContainer} {
    position: absolute;
    top: 32px;
    z-index: 1;
  }
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: end;
    z-index: 1;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
    z-index: -1;
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
