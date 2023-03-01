import * as React from "react"
import { Character } from '../../graphql.schema'
import { ReactNode, useState, createContext, useContext, Dispatch, SetStateAction } from "react"

interface CharactersContextValue {
  page: Number
  characters: Character[]
  setPage: Dispatch<SetStateAction<Number>>
  setCharacters: Dispatch<SetStateAction<Character[]>>
}

const CharactersContext = createContext<CharactersContextValue>({
  page: 1,
  characters: [],
  setPage: () => ({}),
  setCharacters: () => ({})
})

interface Props {
  children?: ReactNode
}

export const CharactersProvider = ({ children }: Props) => {
  const [page, setPage] = useState<Number>(1)
  const [characters, setCharacters] = useState<Character[]>([])

  return (
    <CharactersContext.Provider value={{
      page, characters,
      setPage, setCharacters
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
