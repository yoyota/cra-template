import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Counter from "./Counter"

function CounterContainer() {
  const { count } = useSelector(state => state)
  const { increment, incrementAsync } = useDispatch().count

  return (
    <Counter
      count={count}
      increment={increment}
      incrementAsync={incrementAsync}
    />
  )
}

export default CounterContainer
