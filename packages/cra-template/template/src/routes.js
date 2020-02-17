import React from "react"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Count from "./count"
import ApiExample from "./apiExample"

const routes = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/example/count", component: Count },
  { exact: true, path: "/example/api", component: ApiExample }
]

export default routes.map(route => (
  <Route
    key={route.path}
    exact={route.exact}
    path={route.path}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={props => <route.component {...props} />}
  />
))
