import mongoose from "mongoose";

const Connection = async(username, password) =>{
  const URL = `mongodb+srv://${username}:${password}@chatapp.hvuxr.mongodb.net/SHAREME?retryWrites=true&w=majority`;
  try{
   await mongoose.connect(URL)
   console.log("Database connected")
  }catch(error){
    console.log("Error while connecting MongoDB", error)
  }
}

export default Connection;