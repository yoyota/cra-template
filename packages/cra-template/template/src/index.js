import React from "react"
import ReactDOM from "react-dom"
import "typeface-roboto"
import App from "./App"
import ErrorBoundary from "./ErrorBoundary"
// eslint-disable-next-line
import reportWebVitals from "./reportWebVitals"

const Root = () => (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)

ReactDOM.render(<Root />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
