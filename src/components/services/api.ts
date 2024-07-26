import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getOnAcao: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getEsportes: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulacao: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getLuta: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpg: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetOnAcaoQuery,
  useGetRpgQuery,
  useGetEsportesQuery,
  useGetSimulacaoQuery,
  useGetLutaQuery,
  useGetGameQuery
} = api
export default api
