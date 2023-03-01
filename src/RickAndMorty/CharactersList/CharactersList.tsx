import { Character } from '../../graphql.schema'

import * as React from "react"
import { useState } from "react"

import CharactersListView from '../CharactersListView'
import { useCharacters } from '../ApiService'

const CharactersList = () => {
  const [charactersList, setCharactersList] = useState<Character[]>([])
  useCharacters(setCharactersList)

  return (
    <CharactersListView charactersList={charactersList} />
  )
}

export default CharactersList
