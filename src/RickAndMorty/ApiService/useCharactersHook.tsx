import { Character } from '../../graphql.schema'
import { useEffect } from "react"

import ApiService from './ApiService'
import getCharactersListQuery from '../CharactersList/get-characters-list.gql'
import { useCharactersContext } from '../CharactersContext'

const useCharacters = () => {
  const { setCharacters } = useCharactersContext()

  useEffect(() => {
    ApiService.request(getCharactersListQuery, { page: 1, name: "rick" } )
    .then((result) => {
      const characters = result.data?.characters?.results ?? []
      setCharacters(characters as Character[])
    })
  }, [setCharacters])
}

export default useCharacters
