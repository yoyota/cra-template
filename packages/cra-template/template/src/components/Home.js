import React from "react"
import { Box, Button, Typography } from "@material-ui/core"

function Home() {
  return (
    <>
      <Typography gutterBottom variant="h1">
        home
      </Typography>
      <Box component="span" mr={3}>
        <Button color="primary" href="/example/count" variant="contained">
          Go to rematch example
        </Button>
      </Box>
      <Button color="secondary" href="/example/api" variant="contained">
        Go to api example
      </Button>
    </>
  )
}
export default Home
