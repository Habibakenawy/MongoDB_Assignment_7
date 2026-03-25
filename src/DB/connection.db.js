import { MongoClient } from "mongodb";
import { DB_NAME,DB_URI } from "../../config/config.service.js";


const client = new MongoClient(DB_URI,{serverSelectionTimeoutMS:5000});
export const  db= client.db(DB_NAME);

export const authenticateDB = async () =>{
    try{
   await client.connect();
    console.log("Connected to DB")
    }catch(err){
   console.log(`Failed to connect to DB ${err}`)
    }
}



