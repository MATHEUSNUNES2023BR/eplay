import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../style'
import { Card } from '../Product/style'

export const ContainerProducts = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px;
  background-color: ${(Props) =>
    Props.background === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(Props) =>
      Props.background === 'black' ? cores.cinza : cores.preta};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
