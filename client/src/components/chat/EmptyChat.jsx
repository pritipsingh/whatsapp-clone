import { Box, makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  component: {
    background: "#f8f9fa",
    height: "100%",
    padding: "50px 0",
    textAlign: "center",
  },
  image : {
    width: 420,
  }
})

const EmptyChat = () =>{
  const url = "https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png";
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <img src = {url} alt = "empty-chat" className={classes.image} />
    </Box>
  )
}
export default EmptyChat;