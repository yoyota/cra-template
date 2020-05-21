import React from "react"
import { makeStyles, useTheme } from "@material-ui/styles"
import { Drawer, useMediaQuery } from "@material-ui/core"
import SidebarNav from "./SidebarNav"

export default function Sidebar({ open, toggleSidebar }) {
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up("md"))
  const classes = useStyles()
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={toggleSidebar}
      open={open}
      transitionDuration={mdUp ? 0 : 250}
      variant={mdUp ? "persistent" : "temporary"}
    >
      <SidebarNav toggleSidebar={toggleSidebar} />
    </Drawer>
  )
}

const marginTop = "48px"

const useStyles = makeStyles(theme => ({
  drawer: {
    marginTop,
    width: 255,
    height: `calc(100% - ${marginTop}px)`
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}))
