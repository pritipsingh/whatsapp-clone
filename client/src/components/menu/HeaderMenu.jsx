
import { MoreVert } from '@material-ui/icons'
import {Menu, MenuItem, makeStyles} from '@material-ui/core'
import React, {useState, useContext} from 'react'
import {GoogleLogout} from 'react-google-login'
import { clientId } from '../../constants/data'

import { AccountContext } from '../../context/AccountProvider'
import Drawer from "../drawer/InfoDrawer"

const useStyles = makeStyles({
  menuItems:{
    fontSize: 14,
    padding: "15px 50px 5px 20px",
    color:"#4A4A4A"

  },
  Logout:{
    border: "none! important",
    boxShadow: "none! important",
    "&>*":{
      padding:"none! important"
    }
  }
})

const HeaderMenu = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false)
  const {setAccount} = useContext(AccountContext)

  const handleClose = ()=>{
    setOpen(false);
  }

  const handleClick = (event)=>{
    setOpen(event.currentTarget)
  }

  const onLogoutSuccess = ()=>{
    alert("You have been logged out!")
    console.clear();
    setAccount("");
  }

  const toggleDrawer= () => {
    setOpenDrawer(true)
  }
  return (
    <div>
      <>
      <MoreVert onClick={handleClick}/>
      <Menu
        
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuItem className={classes.menuItems} onClick={()=>{handleClose(); toggleDrawer()}}>Profile</MenuItem>
       
        <MenuItem className={classes.menuItems} onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            buttonText="Log Out"
            onLogoutSuccess={onLogoutSuccess}
            className={classes.Logout}
          >

          </GoogleLogout>
        </MenuItem>
      </Menu>
      <Drawer open={openDrawer} setOpen={setOpenDrawer}/>
      </>
      
    </div>
  )
}

export default HeaderMenu
