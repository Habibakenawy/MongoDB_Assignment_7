import { db } from "../../DB/connection.db.js";


export const insertIntoBookModel = async(doc) => {
return await db.collection("books").insertOne(doc);
}



export const insertManyIntoBookModel = async(doc) => {
return await db.collection("books").insertMany(doc);
}
