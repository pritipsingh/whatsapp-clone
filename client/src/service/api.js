//we can use fetch or axios. 
import axios from "axios";

const URL= "http://localhost:5000"
export const addUser = async(data)=>{
  try {
    return await axios.post(`${URL}/add` , data);
  } catch (error) {
    console.log("Error while calling addUser api", error);
  }
}

export const getUsers = async()=>{
  try {
    
    let response= await axios.get(`${URL}/users`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers api", error);
  }
}

export const setConversation = async(data) =>{
  try {
    await axios.post(`${URL}/conversation/add`, data)
  } catch (error) {
    console.log("Error while calling setConversation api", error);
  }
}

export const getConversation =  async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, data)
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation api", error);
  }
}

export const newMessage = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data)
   
  } catch (error) {
    console.log("Error while calling newMessage api", error);
  }
}

export const getMessages = async (id) => {
  try {
    return await axios.get(`${URL}/message/get/${id}`)
   
  } catch (error) {
    console.log("Error while calling getMessage api", error);
  }
}