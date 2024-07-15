import { useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGameAcao] = useState<Game[]>([])
  const [gamesRPG, setGamegamesRPG] = useState<Game[]>([])
  const [gamesEsportes, setGameEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamegamesLuta] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamegamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamegamesRPG(res))
  }, [])

  return (
    <>
      <ProductList games={gamesAcao} background="black" title="Ação" />
      <ProductList games={gamesRPG} background="gray" title="RPG" />
      <ProductList games={gamesEsportes} background="black" title="Esportes" />
      <ProductList games={gamesSimulacao} background="gray" title="Simulacao" />
      <ProductList games={gamesLuta} background="black" title="Simulacao" />
    </>
  )
}
export default Categories
