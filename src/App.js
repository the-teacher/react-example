import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import IndexPage from "./pages/IndexPage"

import HelloWorld from "./components/HelloWorld"
import DefaultIndex from "./components/DefaultIndex"
import AppLayout from "./pages/layouts/AppLayout"

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route exact path="/hello-world" element={<HelloWorld />} />
          <Route exact path="/default" element={<DefaultIndex />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  )
}

export default App;
