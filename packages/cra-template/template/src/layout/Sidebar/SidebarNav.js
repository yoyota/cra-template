import React from "react"
import { NavLink } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/styles"
import { List, ListItem, useMediaQuery, Button } from "@material-ui/core"
import { ListAlt, Dashboard } from "@material-ui/icons"

export default function SidebarNav({ toggleSidebar }) {
  const classes = useStyles()
  const theme = useTheme()
  const mdUp = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  })

  return (
    <List className={classes.root} onClick={mdUp ? null : toggleSidebar}>
      {pages.map(page => (
        <ListItem key={page.title} className={classes.item} disableGutters>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={NavLink}
            to={page.href}
          >
            <page.icon className={classes.icon} />
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    marginBottom: theme.spacing(2)
  },
  item: {
    display: "flex",
    paddingBottom: 0,
    marginLeft: "12px"
  },
  button: {
    justifyContent: "flex-start",
    textTransform: "capitalize",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.primary.main
    }
  }
}))

const pages = [
  {
    title: "count",
    href: "/example/count",
    icon: Dashboard
  },
  {
    title: "api",
    href: "/example/api",
    icon: ListAlt
  }
]
