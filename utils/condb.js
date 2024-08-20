import mongoose from "mongoose";

// const url ="mongodb://localhost:27017/prapp"
const url ="mongodb+srv://sahilsahil0901:sahiluuu@cluster0.dgd61.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



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
