import * as React from "react"

import CharactersListView from '../CharactersListView'
import Pagination from '../Pagination'

import { useCharacters } from '../ApiService'

const CharactersList = () => {
  useCharacters()

  return (
    <>
      <Pagination />
      <CharactersListView />
      <Pagination />
    </>
  )
}

export default CharactersList
