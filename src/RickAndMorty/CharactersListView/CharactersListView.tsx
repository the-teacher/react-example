import * as React from "react"
import { Character } from '../../graphql.schema'
import CharacterCard from '../CharacterCard'

type Props = {
  charactersList: Character[]
}

const CharactersListView = ({ charactersList }: Props) => {
  return (
    <ul className="list-group">{
      charactersList.map((character) => {
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
