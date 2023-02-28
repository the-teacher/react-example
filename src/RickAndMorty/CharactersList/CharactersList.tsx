import * as React from "react"
import { useEffect } from "react"

import ApiService from '../service'
import getCharactersListQuery from './get-characters-list.gql'

const CharactersList = () => {
  useEffect(() => {
    ApiService.request(getCharactersListQuery, { page: 1, name: "rick" } )
    .then((result) => console.log(result.data.characters))
  })

  return (
    <>RickAndMorty::CharactersList</>
  )
}

export default CharactersList
