import React from "react"
import { Box, Button } from "@material-ui/core"

function ApiExample({
  src = "",
  fetchSuccess = () => {},
  fetchFail = () => {}
}) {
  return (
    <>
      <Box my={3}>
        <Button onClick={() => fetchSuccess()} variant="contained">
          Replace Image
        </Button>{" "}
        <Box component="span" mx={1} />
        <Button onClick={() => fetchFail()} variant="contained">
          Test api error
        </Button>
      </Box>
      <div>
        <img alt="dog" height="100%" src={src} width="100%" />
      </div>
    </>
  )
}

export default ApiExample
