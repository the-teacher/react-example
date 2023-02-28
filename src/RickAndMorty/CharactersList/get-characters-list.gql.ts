const getCharactersListQuery = `
  query getCharactersList($page: Int, $name: String){
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`

export default getCharactersListQuery
