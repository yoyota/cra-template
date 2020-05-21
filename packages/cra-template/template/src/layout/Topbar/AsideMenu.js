import React, { useState } from "react"
import { Menu, MenuItem, Hidden, IconButton } from "@material-ui/core"
import MoreVertIcon from "@material-ui/icons/MoreVert"

export default function AsideMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleClick(e) {
    setAnchorEl(e.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  return (
    <Hidden smUp>
      <IconButton
        aria-controls="aside-menu"
        aria-haspopup="true"
        aria-label="aside"
        color="inherit"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="aside-menu"
        keepMounted
        onClose={handleClose}
        open={open}
      >
        <MenuItem onClick={handleClose}>notification</MenuItem>
        <MenuItem onClick={handleClose}>logout</MenuItem>
      </Menu>
    </Hidden>
  )
}
