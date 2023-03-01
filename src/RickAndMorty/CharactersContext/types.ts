import { Character, Info } from '../../graphql.schema'
import { Dispatch, SetStateAction } from "react"

export type SetFunction<T> = Dispatch<SetStateAction<T>>

export type CharactersContextValue = {
  name: String,
  setName: SetFunction<String>,

  page: Number
  setPage: SetFunction<Number>

  pagesInfo: Info,
  setPagesInfo: SetFunction<Info>,

  characters: Character[]
  setCharacters: SetFunction<Character[]>

  loading: Boolean,
  setLoading: SetFunction<Boolean>
}

export const blankFunction = () => ({})
