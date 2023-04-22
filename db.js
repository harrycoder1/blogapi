import { MongoClient } from 'mongodb'
import myenv from 'dotenv'
myenv.config()
// Mongo connection started --here
const uri= process.env.REACT_APP_DATABSE_URL ;


    const client =new MongoClient(uri);
    const db = client.db(process.env.REACT_APP_DATABSE_NAME);
    const mongoRun =async ()=>{
       await client.connect()
       console.log("MongoDB are Connected !!")
    }

// export default here 
export  {client,mongoRun ,db}