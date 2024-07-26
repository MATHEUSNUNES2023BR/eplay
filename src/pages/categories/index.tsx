import { useState } from 'react'
import { ProductList } from '../../components/ProductList'
import { Game } from '../Home'
import {
  useGetOnAcaoQuery,
  useGetRpgQuery,
  useGetEsportesQuery,
  useGetSimulacaoQuery,
  useGetLutaQuery
} from '../../components/services/api'
const Categories = () => {
  const { data: actiongames } = useGetOnAcaoQuery()
  const { data: fightGames } = useGetRpgQuery()
  const { data: rpgGames } = useGetEsportesQuery()
  const { data: simulationGames } = useGetSimulacaoQuery()
  const { data: sportGames } = useGetLutaQuery()

  if (actiongames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList games={actiongames} background="black" title="Ação" />
        <ProductList games={rpgGames} background="gray" title="RPG" />
        <ProductList games={sportGames} background="black" title="Esportes" />
        <ProductList games={fightGames} background="gray" title="Fight" />
        <ProductList
          games={simulationGames}
          background="black"
          title="Simulacao"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Categories
