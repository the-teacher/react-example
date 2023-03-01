import * as React from "react"
import { Character } from '../../graphql.schema'
import { ReactNode, useState, createContext, useContext, Dispatch, SetStateAction } from "react"

interface CharactersContextValue {
  page: Number
  setPage: Dispatch<SetStateAction<Number>>
  characters: Character[]
  setCharacters: Dispatch<SetStateAction<Character[]>>
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
}

const CharactersContext = createContext<CharactersContextValue>({
  page: 1,
  setPage: () => ({}),
  characters: [],
  setCharacters: () => ({}),
  loading: false,
  setLoading: () => ({})
})

interface Props {
  children?: ReactNode
}

export const CharactersProvider = ({ children }: Props) => {
  const [page, setPage] = useState<Number>(1)
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <CharactersContext.Provider value={{
      page, setPage,
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
