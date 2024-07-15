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

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
