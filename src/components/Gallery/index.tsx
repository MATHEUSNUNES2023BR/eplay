import { useState } from 'react'
import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/close.png'

import { Container } from '../../style'
import { Items, Item, Action, Modal, ModalContent } from './style'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: ''
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/N8Zm___c4B8?si=omQ2XUeiIeg7gFQP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen'
  },
  {
    type: 'image',
    url: ''
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () =>
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() =>
                setModal({ isVisible: true, type: media.type, url: media.url })
              }
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <Container>
          <ModalContent>
            <header>
              <h4>{name}</h4>
              <img
                src={fechar}
                alt="Ícone de fechar"
                onClick={() => closeModal()}
              />
            </header>
            {modal.type === 'image' ? (
              <img src={modal.url} />
            ) : (
              <iframe frameBorder={0} src={modal.url}></iframe>
            )}
          </ModalContent>
        </Container>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}
export default Gallery
