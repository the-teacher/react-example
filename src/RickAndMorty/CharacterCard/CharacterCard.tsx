import * as React from "react"
import { Character } from '../../graphql.schema'
import { timeFormat } from './utils'

type Props = {
  character: Character
}

const CharacterCard = ({ character }: Props) => (
  <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={character.image!} className="img-fluid rounded-start" alt={character.name!} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{character.name!}</h5>
          <p className="card-text"><b>Episodes:</b> {character.episode.map((episode) => episode?.name).join(', ')}</p>
          <p className="card-text">
            <small className="text-muted">
              Created: {timeFormat(character.created!)}
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default CharacterCard
