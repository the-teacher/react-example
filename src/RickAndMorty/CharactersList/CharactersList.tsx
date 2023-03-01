import * as React from "react"

import CharactersListView from '../CharactersListView'
import { useCharacters } from '../ApiService'

const CharactersList = () => {
  useCharacters()
  return (<CharactersListView />)
}

export default CharactersList
