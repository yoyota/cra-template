import React from "react"
import ReactDOM from "react-dom"
import "typeface-roboto"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import ErrorBoundary from "./ErrorBoundary"

const Root = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)

ReactDOM.render(<Root />, document.getElementById("root"))

serviceWorker.unregister()
