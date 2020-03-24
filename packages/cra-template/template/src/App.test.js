import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders home", () => {
  render(<App />)
  const homeElement = screen.getByText(/replace/i)
  expect(homeElement).toBeInTheDocument()
})