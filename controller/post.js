import { db } from "../db.js";
import myenv from 'dotenv'
myenv.config();
const blogs = db.collection(process.env.REACT_APP_DATABSE_COLLECTION)
export const getPosts =async(req,res)=>{
try {
    const data = blogs.find({});
    const ss=await data.toArray()


res.status(200).json({success:true,data:ss})
} catch (error) {
    res.status(404).json({success:false,error:error.message})
}

}

export const createPost =async(req,res)=>{
    // const raw = {
    //     title :'this Goal',
    //     message :"this is my goal in career ",
    //     creator :"harish hedau",
    //     tags :["google", "meta","kotlin"],
    //     selectFile: "my.png",
    //     likeCount : 0

    // }
const data = req.body ;
console.log(data)
try {
const v = await blogs.insertOne({...data , date :`${Date.now()}`})
res.status(200).json({success:true ,data:data ,token :v})
    
} catch (error) {
   res.status(404).json(error.message) 
}

// console.log(v)



    }