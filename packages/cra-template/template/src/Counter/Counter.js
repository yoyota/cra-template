import React from "react"
import { Box, Button, Typography } from "@material-ui/core"

function Counter({
  count = 0,
  increment = () => {},
  incrementAsync = () => {}
}) {
  return (
    <div>
      <Typography variant="h2">count: {count}</Typography>
      <Button onClick={() => increment(1)} variant="contained">
        Add 1
      </Button>
      <Box component="span" mx={1} />
      <Button onClick={() => incrementAsync(1)} variant="contained">
        Add 1 Async
      </Button>
    </div>
  )
}
export default Counter
