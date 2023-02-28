import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import DefaultIndex from "./components/DefaultIndex"
import HelloWorld from "./components/HelloWorld"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HelloWorld />} />
          <Route exact path="/default" element={<DefaultIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
