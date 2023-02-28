// https://rickandmortyapi.com/documentation/

const RICK_AND_MORTY_API = 'https://rickandmortyapi.com/graphql'

const ApiService = () => ({
  request: (query: string, variables?: object) => (
    fetch(RICK_AND_MORTY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      }),
    }).then((res) => res.json())
  )
})

export default ApiService()
