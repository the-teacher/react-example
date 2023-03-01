import * as React from "react"
import { Character } from '../../graphql.schema'
import { ReactNode, useState, createContext, useContext, Dispatch, SetStateAction } from "react"

type SetFunction<T> = Dispatch<SetStateAction<T>>
const blankFunction = () => ({})

interface CharactersContextValue {
  page: Number
  setPage: SetFunction<Number>
  name: string,
  setName: SetFunction<String>,
  characters: Character[]
  setCharacters: SetFunction<Character[]>
  loading: Boolean,
  setLoading: SetFunction<Boolean>
}

const CharactersContext = createContext<CharactersContextValue>({
  page: 1,
  setPage: blankFunction,
  name: '',
  setName: blankFunction,
  characters: [],
  setCharacters: blankFunction,
  loading: false,
  setLoading: blankFunction
})

interface Props {
  children?: ReactNode
}

export const CharactersProvider = ({ children }: Props) => {
  const [page, setPage] = useState<Number>(1)
  const [name, setName] = useState<string>('')
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <CharactersContext.Provider value={{
      page, setPage,
      name, setName,
      characters, setCharacters,
      loading, setLoading
    }}>
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharactersContext = () => {
  const contextValue = useContext(CharactersContext)

  if (contextValue === undefined) {
    throw new Error(
      '`useCharactersContext` must be used within a `CharactersProvider`'
    )
  }

  return contextValue
}
