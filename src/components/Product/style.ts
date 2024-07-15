import styled from 'styled-components'
import { cores } from '../../style'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'
export const LinkContainer = styled(Link)`
  text-decoration: none;
  color: ${cores.branca};
`
export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;
  img {
    border-radius: 8px;
    width: 220px;
    height: 260px;
  }
  position: relative;
  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
