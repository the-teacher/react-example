import * as React from "react"
import { Route } from "react-router-dom"

import Routes from "./routes"

const AppRoutes = Routes.map(({ path, component }) => (
  <Route path={path} element={
    React.createElement(component, {})
  }/>
))

export default AppRoutes
