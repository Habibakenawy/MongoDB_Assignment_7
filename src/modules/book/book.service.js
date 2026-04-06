import { db } from "../../DB/connection.db.js";

export const insertIntoBookModel = async (doc) => {
  return await db.collection("books").insertOne(doc);
};

export const insertManyIntoBookModel = async (doc) => {
  return await db.collection("books").insertMany(doc);
};

export const updateBook = async () => {
  return await db
    .collection("books")
    .updateOne({ title: "Future" }, { $set: { year: 2022 } });
};

export const findBookbyTitle = async (name) => {
  return await db.collection("books").findOne({ title: name });
};

export const findBooksBetweenYears = async (y1, y2) => {
  return await db
    .collection("books")
    .find({ year: { $gte: Number(y1), $lte: Number(y2) } })
    .toArray();
};


export const findBooKByGenre = async (bookGenre) =>{
 return await db.collection("books").find({genres:bookGenre}).toArray();

}