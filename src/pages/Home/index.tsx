import Banner from '../../components/Banner'
import { ProductList } from '../../components/ProductList'

import {
  useGetOnSaleQuery,
  useGetSoonQuery
} from '../../components/services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  release_date: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    languages: string[]
    category: string
    system: string
    developer: string
    publisher: string
  }
  description: string
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()
  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList games={onSaleGames} background="gray" title="Promoções" />
        <ProductList games={soonGames} background="black" title="Em breve" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
