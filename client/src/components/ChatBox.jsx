import { Box, Dialog, withStyles, makeStyles } from '@material-ui/core';
import {useContext} from 'react';
import { UserContext } from '../context/UserProvider';

//component
import Menu from './menu/Menu';
import Chat from './chat/Chat';
import EmptyChat from './chat/EmptyChat';

const useStyle = makeStyles({
  component:{
    display: 'flex',
  },
  leftComponent:{
    width: 300,
  },
  rightComponent:{
    borderLeft: "1px solid rgba(0, 0, 0, 0.14)",
    width: "80%",
    minWidth: 300,
    height: "100%"
  }
})


const style = {
  dialogPaper: {
    height: '95%',
    width: '91%',
    // marginTop: '12%',
    boxShadow: 'none',
    borderRadius: '0px',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: "hidden"
  }
}

const ChatBox=({classes})=> {

    const classname = useStyle();
    const { person } = useContext(UserContext)
  return (
    <Dialog
    open={true}
    classes={{paper: classes.dialogPaper}}
    BackdropProps={{style: {backgroundColor: "unset"}}}
    
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu/>
        </Box>
        <Box className={classname.rightComponent}>
          {
            Object.keys(person).length ? <Chat /> : <EmptyChat />
          }
       
        </Box>
      </Box>
    </Dialog>
  )
}
export default withStyles(style)(ChatBox) ;
