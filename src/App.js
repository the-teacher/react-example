import * as React from "react"

import {
  BrowserRouter,
  Routes
} from "react-router-dom"

import AppLayout from "./pages/layouts/AppLayout"
import { CharactersProvider } from './RickAndMorty/CharactersContext'

import { AppRouter } from './router'

function App() {
  return (
    <AppLayout>
      <CharactersProvider>
        <BrowserRouter>
          <Routes>
            {AppRouter}
          </Routes>
        </BrowserRouter>
      </CharactersProvider>
    </AppLayout>
  )
}

export default App;
