import React, {useEffect, useState, useContext} from 'react'
import { getUsers } from '../../service/api'
import {Box, makeStyles} from '@material-ui/core';

import {AccountContext} from '../../context/AccountProvider'

//component
import Conversations from './Conversations';

const useStyles = makeStyles({
  component:{
    height: "81vh",
    overflow: "overLay"
  }
})

const Conversation = ({text}) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const {account, socket, setActiveUsers} = useContext(AccountContext)

  useEffect(() => {
    const fetchData=async ()=>{
      const data=await getUsers();
      let fiteredData = data.filter(user => user.givenName.toLowerCase().includes(text.toLowerCase()));
            setUsers(fiteredData);
    }
    fetchData();
    
  }, [text])

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on( "getUsers" , users => {
      setActiveUsers(users);
    })
  }, [account])

  return (
    <Box className={classes.component}>
      {
        users.map(user=>(
          user.googleId !== account.googleId &&
          <Conversations user={user}/>
        ))
      }
    </Box>
  )
}

export default Conversation
