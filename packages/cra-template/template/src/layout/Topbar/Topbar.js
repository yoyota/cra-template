import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { Link as RouterLink } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Badge,
  Hidden,
  IconButton,
  Typography,
  Link
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import InputIcon from "@material-ui/icons/Input"
import AsideMenu from "./AsideMenu"

export default function Topbar({ toggleSidebar }) {
  const classes = useStyles()
  const [notifications] = useState([])

  return (
    <AppBar className={classes.root}>
      <Toolbar disableGutters variant="dense">
        <IconButton color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography color="textSecondary" variant="h5">
          <Link color="inherit" component={RouterLink} to="/">
            Create React App
          </Link>
        </Typography>
        <div className={classes.flexGrow} />
        <Hidden xsDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <AsideMenu />
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    zIndex: "1000"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}))
