import React, {useContext, useState} from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

import { AccountContext} from "../../context/AccountProvider";

import {getConversation, setConversation} from "../../service/api"
import {  UserContext} from '../../context/UserProvider';
import { useEffect } from 'react';

const useStyles = makeStyles({
  component:{
    display: "flex",
    height: 40,
    padding: "13px 0",
    cursor: "pointer"
  },
  displayPicture:{
    width: 50,

    height: 50,
    borderRadius: "50%",
    padding: "0 14px"
  },
  timestamp: {
    font: 12,
    marginLeft: "auto",
    marginRight: 20,
    color: "#00000099"
  },
  text: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 14
  }
})

const Conversations = ({user}) => {
  const classes= useStyles();
  const url = user.imageUrl

  const {account, newMessageFlag} = useContext(AccountContext)
  const {setPerson} = useContext(UserContext)
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation( { sender: account.googleId, receiver: user.googleId });
      setMessage({ text: data.message, timeStamp: data.updatedAt});
    }
    getConversationMessage();
  }, [newMessageFlag])

  const setUser = async()=>{
    setPerson(user) 
    await setConversation({senderId: account.googleId, receiverId:user.googleId })
  }
  return (
    <Box className={classes.component} onClick={()=> setUser()}>
      <Box>
        <img src={url} alt="dp" className={classes.displayPicture}/>
      </Box>
      <Box style={{width: "100%"}}>
      <Box style={{display: "flex"}}>
        <Typography>{user.givenName}</Typography>
        {
          message.text &&
          <Typography className={classes.timestamp}>
            {new Date(message.timeStamp).getHours()}:{new Date(message.timeStamp).getMinutes()}
            </Typography>
        }
      </Box>
      <Box>
        <Typography className={classes.text}>{message.text}</Typography>
      </Box>
    </Box>
    </Box>
  )
}

export default Conversations
