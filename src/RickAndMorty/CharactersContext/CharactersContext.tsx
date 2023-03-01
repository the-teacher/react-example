import * as React from "react"
import { ReactNode, useState, createContext, useContext } from "react"

import { Character, Info } from '../../graphql.schema'
import { blankFunction, CharactersContextValue } from './types'

const CharactersContext = createContext<CharactersContextValue>({
  name: '',
  setName: blankFunction,

  page: 1,
  setPage: blankFunction,

  pagesInfo: {},
  setPagesInfo: blankFunction,

  characters: [],
  setCharacters: blankFunction,

  loading: false,
  setLoading: blankFunction
})

interface Props {
  children?: ReactNode
}

export const CharactersProvider = ({ children }: Props) => {
  const [name, setName] = useState<string>('')
  const [page, setPage] = useState<Number>(1)
  const [pagesInfo, setPagesInfo] = useState<Info>({})
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <CharactersContext.Provider value={{
      name, setName,
      page, setPage,
      pagesInfo, setPagesInfo,
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
