import { ProductList } from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import fifa from '../../assets/images/fifa.png'
import star from '../../assets/images/star_wars.png'
import street from '../../assets/images/street_fighter.png'
import zelda from '../../assets/images/zelda.png'
import dragonball from '../../assets/images/sparking.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS5 /Xbox Series X',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'Fifa',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: fifa
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'Fifa',
    system: 'PS5',
    infos: ['10%', 'R$ 250,00'],
    image: fifa
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: star
  },
  {
    id: 6,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['05/04'],
    image: street
  },
  {
    id: 7,
    category: 'Anime',
    description: 'Dragon Ball Sparking Zer, incrível jogo de luta',
    title: 'Dragon Ball Sparking Zero',
    system: 'PS5 /Xbox Series X',
    infos: ['10%', 'R$ 250,00'],
    image: dragonball
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'Zelda',
    system: 'Switch',
    infos: ['05/04'],
    image: zelda
  }
]
const Categories = () => (
  <>
    <ProductList games={promocoes} background="gray" title="RPG" />
    <ProductList games={emBreve} background="black" title="Ação" />
    <ProductList games={promocoes} background="gray" title="Aventura" />
    <ProductList games={emBreve} background="black" title="FPS" />
  </>
)
export default Categories
