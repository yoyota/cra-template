import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Count from "../Count"

export default function() {
  const { count } = useSelector(state => state)
  const { increment, incrementAsync } = useDispatch().count

  return (
    <Count
      count={count}
      increment={increment}
      incrementAsync={incrementAsync}
    />
  )
}
