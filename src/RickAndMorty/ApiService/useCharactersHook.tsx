import { Character } from '../../graphql.schema'
import { useEffect } from "react"

import ApiService from './ApiService'
import getCharactersListQuery from '../CharactersList/get-characters-list.gql'
import { useCharactersContext } from '../CharactersContext'

const useCharacters = () => {
  const { name, page, setCharacters, setLoading } = useCharactersContext()

  useEffect(() => {
    setLoading(true)
    ApiService.request(getCharactersListQuery, { page: page, name: name } )
    .then((result) => {
      const characters = result.data?.characters?.results ?? []
      setLoading(false)
      setCharacters(characters as Character[])
    })
  }, [name, setCharacters, setLoading])
}

export default useCharacters
