import { db } from "../../DB/connection.db.js";


export const insertIntoLogModel = async(doc) => {
return await db.collection("logs").insertOne(doc);
}



