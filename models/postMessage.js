import { db } from "../db.js";
// import {g}
export const collectionValidation = async()=>{
    const check = true //if collection was exist then true
 

    !check && (
       
   await db.createCollection("blogs", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Student Object Validation",
          required:['title' , 'message'   , 'selectFile' , 'likeCount'],
          properties: {
             title: {
                bsonType: "string",
                description: "'name' must be a string and is required"
             },
             message: {
                bsonType: "string",
                description: "'message' must be a string and is required"
             },
             creator: {
                bsonType: "string",
                description: "'creator' must be a string and is required"
             },
             tags: {
                bsonType: "array",
                description: "'tags' must be a array and is required"
             },
             selectFile: {
                bsonType: "string",
                description: "'selectFile' must be a string and is required"
             },

            likeCount: {
                bsonType: "number",
                description: "'likeCount' must be a number and is required"
             },
             date :{
               bsonType:"string",
               description:"'datae'  must in the from of stirng"
             }
         
          }
       }
    }
 } ))
}