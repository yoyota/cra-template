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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
