import { Character, Info } from '../../graphql.schema'
import { useEffect } from "react"

import ApiService from './ApiService'
import getCharactersListQuery from '../CharactersList/get-characters-list.gql'
import { useCharactersContext } from '../CharactersContext'

const useCharacters = () => {
  const { name, page, setCharacters, setLoading, setPagesInfo } = useCharactersContext()

  useEffect(() => {
    setLoading(true)
    ApiService.request(getCharactersListQuery, { page: page, name: name } )
    .then((result) => {
      const characters = result.data?.characters?.results ?? []
      const pagesInfo = result.data.characters?.info ?? {}

      setLoading(false)

      setPagesInfo(pagesInfo as Info)
      setCharacters(characters as Character[])
    })
  }, [name, page, setCharacters, setLoading, setPagesInfo])
}

export default useCharacters
