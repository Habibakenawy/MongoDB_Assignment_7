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

export const findBooKByGenre = async (bookGenre) => {
  return await db.collection("books").find({ genres: bookGenre }).toArray();
};

export const skipAndLimit = async () => {
  return await db
    .collection("books")
    .find()
    .skip(2)
    .limit(3)
    .sort({ year: -1 })
    .toArray();
};

export const checkYearInt = async () => {
  return await db
    .collection("books")
    .find({ year: { $type: "int" } })
    .toArray();
};

export const excludeGenres = async () => {
  return await db
    .collection("books")
    .find({ genres: { $nin: ["Horror", "Science Fiction"] } })
    .toArray();
};

export const deleteBeforeDate = async (date) => {
  return await db
    .collection("books")
    .deleteMany({ year: { $lt: Number(date) } });
};

export const aggregateBooksAfter2000 = async () => {
  return await db
    .collection("books")
    .aggregate([{ $match: { year: { $gt: 2000 } } }, { $sort: { year: -1 } }])
    .toArray();
};

export const aggregateBooksAfter2000AndExludeFields = async () => {
  return await db
    .collection("books")
    .aggregate([
      { $match: { year: { $gt: 2000 } } },
      { $project: { _id: 0, title: 1, author: 1, year: 1 } },
    ])
    .toArray();
};
