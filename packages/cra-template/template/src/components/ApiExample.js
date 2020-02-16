import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { randomDog } from "../api"

export default function() {
  const [src, setSrc] = useState("")

  async function fetchDogImageUrl(path = "woof.json") {
    const { url } = await randomDog.get(path)
    setSrc(url)
  }

  useEffect(() => {
    fetchDogImageUrl()
  }, [])

  return (
    <>
      <div className="my-3">
        <Button onClick={() => fetchDogImageUrl()}>Replace Image</Button>{" "}
        <Button variant="danger" onClick={() => fetchDogImageUrl("undefined")}>
          Test api error
        </Button>
      </div>
      <div>
        <img src={src} alt="dog" />
      </div>
    </>
  )
}
