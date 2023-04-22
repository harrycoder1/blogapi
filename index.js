import express from 'express'
import bodyParser from 'body-parser'
// For accessing env variable in app
import myenv from 'dotenv'
myenv.config()
// import mongoose from 'mongoose'
import cors from 'cors'
import { mongoRun } from './db.js'
import postRoutes from './routes/posts.js'
import {collectionValidation} from './models/postMessage.js'

const app  = express() ;



app.use(express.json())
app.use(bodyParser.json({limit:"30mb" , extended:false}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended:false}));
app.use(cors());

app.get('/' , (req,res)=>{
    res.send("hi there")
})

//path localhost:5000/posts
app.use('/posts' , postRoutes)
const PORT = process.env.PORT ||5000
//Connet the mongoDB DATABAE
mongoRun() ;
collectionValidation();
app.listen(PORT , ()=>{
    console.log("api are started successfully!")
})
