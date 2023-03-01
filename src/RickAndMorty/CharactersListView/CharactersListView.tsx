import * as React from "react"
import CharacterCard from '../CharacterCard'

import { useCharactersContext } from '../CharactersContext'

const CharactersListView = () => {
  const { characters, loading } = useCharactersContext()

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <ul className="list-group">{
      characters.map((character) => {
        const keyName = character.id + ' ' + character.name

        return (
          <li key={keyName} className="list-group-item">
            <CharacterCard character={character} />
          </li>
        )
      })
    }</ul>
  )
}

export default CharactersListView
