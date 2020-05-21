import Counter from "./Counter"
import Home from "./components/Home"
import ApiExample from "./ApiExample"

const routes = [
  { exact: true, path: "/", component: Home },
  { exact: true, path: "/example/count", component: Counter },
  { exact: true, path: "/example/api", component: ApiExample }
]

export default routes
