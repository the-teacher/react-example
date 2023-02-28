import * as React from "react"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import AppLayout from "./pages/layouts/AppLayout"
import { AppRouter } from './router'

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          {AppRouter}
        </Routes>
      </BrowserRouter>
    </AppLayout>
  )
}

export default App;
