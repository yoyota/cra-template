import ApiExample from "./apiExample"
import Counter from "./counter"
import Home from "./components/Home"

const routes = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/example/count", component: Counter },
  { exact: true, path: "/example/api", component: ApiExample }
]

export default routes
