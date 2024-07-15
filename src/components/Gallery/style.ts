import styled from 'styled-components'
import { Container, cores } from '../../style'

export const Items = styled.ul`
  display: flex;
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`

export const Item = styled.li`
  position: relative;
  margin-right: 16px;
  > img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  &:hover {
    ${Action} {
      opacity: 1;
      cursor: pointer;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;
  &.visivel {
    display: flex;
  }
  ${Container} {
    max-width: 760px;
    height: 580px;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    z-index: -1;
  }
`

export const ModalContent = styled.div`
  height: 100%;
  header {
    display: flex;
    justify-content: space-between;
    h4 {
      font-size: 26px;
    }
    margin-bottom: 20px;
    img {
      cursor: pointer;
      width: 20px;
    }
  }
  img,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`
