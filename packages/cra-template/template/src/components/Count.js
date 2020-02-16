import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "react-bootstrap"

export default function() {
  const { count } = useSelector(state => state)
  const { increment, incrementAsync } = useDispatch().count

  return (
    <div>
      <h1>count: {count}</h1>
      <Button onClick={() => increment(1)}> Add 1 </Button>{" "}
      <Button onClick={() => incrementAsync(1)}> Add 1 Async </Button>
    </div>
  )
}
