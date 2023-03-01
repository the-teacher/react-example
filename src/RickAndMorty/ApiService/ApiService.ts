// https://rickandmortyapi.com/documentation/

import { Query } from '../../graphql.schema'

const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/graphql'

type TypeWithData = {
  data: Query
}

const ApiService = () => ({
  request: async (query: string, variables?: object) => {
    const reposnse = await fetch(RICK_AND_MORTY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    })

    return await reposnse.json() as Promise<TypeWithData>
  }
})

export default ApiService()
