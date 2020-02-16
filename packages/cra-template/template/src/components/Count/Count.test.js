import React from "react"
import { render } from "@testing-library/react"
import Count from "./Count"

test("renders count", () => {
  const { getByText } = render(<Count />)
  const count = getByText(/count/i)
  expect(count).toBeInTheDocument()
})

test("renders buttons", () => {
  const { getByText } = render(<Count />)
  expect(getByText(/^Add 1$/i)).toBeInTheDocument()
  expect(getByText(/^Add 1 Async$/i)).toBeInTheDocument()
})
