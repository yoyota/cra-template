import React, { useEffect, useState } from "react"
import { randomDog } from "../api"
import ApiExample from "./ApiExample"

function ApiExampleContainer() {
  const [src, setSrc] = useState("")

  async function fetchDogImageUrl(path = "woof.json") {
    const { url } = await randomDog.get(path)
    setSrc(url)
  }

  useEffect(() => {
    fetchDogImageUrl()
  }, [])

  return (
    <ApiExample
      fetchFail={() => fetchDogImageUrl("undefined")}
      fetchSuccess={() => fetchDogImageUrl()}
      src={src}
    />
  )
}
export default ApiExampleContainer
