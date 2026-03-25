import {db} from "../../DB/connection.db.js"

export const bookModel = async() => {return await  db.createCollection("books", {
        validator: { $jsonSchema: {
            bsonType: "object",
            required: ["title"],
            properties: { title: { bsonType: "string",description: "must be a non-empty string" } }
        }}
    })}


export const authorModel = await db.createCollection("authors");


export const logsModel = async() =>{
    return await db.createCollection("logs",{capped:true,size:1000000});
}

export const createIndexforBooks = async() =>{
    return await db.collection("books").createIndex( { title: 1 } )
}