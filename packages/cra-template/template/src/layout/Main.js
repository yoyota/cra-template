import React, { useState, useEffect, useCallback } from "react"
import { makeStyles, useTheme } from "@material-ui/styles"
import { useMediaQuery } from "@material-ui/core"
import { Route, Switch } from "react-router-dom"
import routes from "../routes"
import Topbar from "./Topbar"
import Sidebar from "./Sidebar"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  shiftContent: {
    paddingLeft: 255
  },
  content: {
    height: "100%"
  },
  main: {
    paddingTop: "48px",
    padding: theme.spacing(3),
    marginTop: theme.spacing(2)
  }
}))

export default function Main() {
  const classes = useStyles()
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  })

  const [sidebarOpen, setSidebarOpen] = useState(mdUp)
  useEffect(() => {
    if (mdUp) {
      setSidebarOpen(true)
      return
    }
    setSidebarOpen(false)
  }, [mdUp])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(!sidebarOpen)
  }, [sidebarOpen])

  const [asideOpen, setAsideOpen] = useState(false)

  return (
    <div>
      <Topbar
        asideOpen={asideOpen}
        setAsideOpen={setAsideOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className={sidebarOpen && mdUp ? classes.shiftContent : ""}>
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={classes.main}>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                render={() => <route.component />}
              />
            ))}
          </Switch>
        </main>
      </div>
    </div>
  )
}
