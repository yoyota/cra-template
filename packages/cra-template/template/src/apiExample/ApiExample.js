import React from "react"
import { Button } from "react-bootstrap"

export default function({
  src = "",
  fetchSuccess = () => {},
  fetchFail = () => {}
}) {
  return (
    <>
      <div className="my-3">
        <Button onClick={() => fetchSuccess()}>Replace Image</Button>{" "}
        <Button variant="danger" onClick={() => fetchFail()}>
          Test api error
        </Button>
      </div>
      <div>
        <img src={src} alt="dog" />
      </div>
    </>
  )
}
