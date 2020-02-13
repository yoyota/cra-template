import React from "react"
import ReactDOM from "react-dom"
import { init } from "@rematch/core"
import { Provider } from "react-redux"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import * as models from "./models"

const store = init({
  models
})

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById("root"))

serviceWorker.unregister()
