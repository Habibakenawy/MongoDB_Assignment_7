import { db } from "../../DB/connection.db.js";
import { ObjectId } from 'mongodb';

export const insertIntoLogModel = async (doc) => {
  if (doc.book_id && typeof doc.book_id === 'string') {
    doc.book_id = new ObjectId(doc.book_id);
  }
  
  return await db.collection("logs").insertOne(doc);
};



