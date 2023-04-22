import { MongoClient } from 'mongodb'


// Mongo connection started --here
const uri= process.env.REACT_APP_DATABSEURL;


    const client =new MongoClient(uri);
    const db = client.db("blogh");
    const mongoRun =async ()=>{
       await client.connect()
       console.log("MongoDB are Connected !!")
    }

// export default here 
export  {client,mongoRun ,db}