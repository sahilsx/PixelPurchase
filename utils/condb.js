import mongoose from "mongoose";

const url ="mongodb://localhost:27017/prapp"



const connection = async ()=>{


  if (mongoose.connections[0].readyState) {

    return;
  }



    try{
        await mongoose.connect(url)
        console.log(`database connected on url ${url}`)

    }
    catch(error){
     console.log(error)


    }



}
export default connection;