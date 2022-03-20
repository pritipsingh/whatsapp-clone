import { Box, makeStyles, InputBase } from '@material-ui/core'
import React from 'react'
import { Search as SearchIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme=>({
  component:{
    background:"#F6F6F6",
    height: 45,
    display:"flex",
    alignItems:"center"
  },
  search:{
    position: 'relative',
    borderRadius: 18,
    backgroundColor: "#fff",
    
    margin: "0 13px",
    width: '100%',
    
  },
  searchIcon:{
   color:"#919191" ,
   padding:theme.spacing(0,2), 
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  inputRoot:{
    width:"100%",
  },
  inputInput:{
  
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 65,
    fontSize: 14,
    height:15,
   
    },
 
}))

const Search = ({setText}) => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
   <Box className={classes.search}>
       
            <Box className={classes.searchIcon}>
              <SearchIcon fontSize='small'/>
            </Box>
            <Box className={classes.StyledInputBase}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setText(e.target.value)}
            />
            </Box>
     </Box>    
   </Box>
  )
}

export default Search
