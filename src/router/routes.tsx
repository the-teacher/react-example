import IndexPage from "../pages/IndexPage"
import HelloWorld from "../components/HelloWorld"
import DefaultIndex from "../components/DefaultIndex"

type RouteItem = {
  path: string
  component: () => JSX.Element
}

const Routes:RouteItem[] = [
  {
    path: "/",
    component: IndexPage
  },
  {
    path: "/hello-world",
    component: HelloWorld
  },
  {
    path: "/default",
    component: DefaultIndex
  },
]

export default Routes
