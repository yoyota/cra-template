import React from "react"
import { Button } from "react-bootstrap"

export default function() {
  return (
    <>
      <p>home</p>
      <Button variant="link" href="/example/count">
        Go to rematch example
      </Button>
      <Button variant="link" href="/example/api">
        Go to api example
      </Button>
    </>
  )
}
