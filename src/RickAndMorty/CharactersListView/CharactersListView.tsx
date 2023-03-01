import * as React from "react"
import CharacterCard from '../CharacterCard'

import { useCharactersContext } from '../CharactersContext'

const CharactersListView = () => {
  const { characters } = useCharactersContext()

  return (
    <ul className="list-group">{
      characters.map((character) => {
        return (
          <li key={character.name} className="list-group-item">
            <CharacterCard character={character} />
          </li>
        )
      })
    }</ul>
  )
}

export default CharactersListView
