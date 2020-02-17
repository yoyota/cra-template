import React, { useState, useEffect } from "react"
import { randomDog } from "../api"
import ApiExample from "./ApiExample"

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
    <ApiExample
      src={src}
      fetchSuccess={() => fetchDogImageUrl()}
      fetchFail={() => fetchDogImageUrl("undefined")}
    />
  )
}
