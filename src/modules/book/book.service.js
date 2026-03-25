import { db } from "../../DB/connection.db.js";


export const insertIntoBookModel = async(doc) => {
return await db.collection("books").insertOne(doc);
}

