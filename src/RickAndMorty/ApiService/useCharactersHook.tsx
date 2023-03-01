import { Character } from '../../graphql.schema'
import { useEffect, Dispatch, SetStateAction } from "react"

import ApiService from './ApiService'
import getCharactersListQuery from '../CharactersList/get-characters-list.gql'

const useCharacters = (setCharactersList: Dispatch<SetStateAction<Character[]>>) => (
  useEffect(() => {
    ApiService.request(getCharactersListQuery, { page: 1, name: "rick" } )
    .then((result) => {
      const characters = result.data?.characters?.results ?? []
      setCharactersList(characters as Character[])
    })
  }, [])
)

export default useCharacters
