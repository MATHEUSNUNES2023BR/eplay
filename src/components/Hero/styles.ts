import styled from 'styled-components'
import bannerImg from '../../assets/images/fundo_hogwarts.png'
import { Container, cores } from '../../style'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  height: 480px;
  display: block;
  width: 100%;
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${bannerImg});
  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }
  ${Container} {
    z-index: 1;
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background: ${cores.preta};
  max-width: 290px;
  width: 100%;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
