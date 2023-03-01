const getCharactersListQuery = `
  query getCharactersList($page: Int, $name: String){
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        name
        image
        gender
        created
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`

export default getCharactersListQuery
