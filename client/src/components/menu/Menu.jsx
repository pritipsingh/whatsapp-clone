
import React, {useState} from 'react'

//components
import Header from './Header';
import Search from './Search';
import Conversation from './Conversation';
const Menu = () => {
  const [text, setText] = useState("")
  return (
    <>
    <Header/>
    <Search setText={setText}/>
    <Conversation text={text}/>
    </>
  )
}

export default Menu
