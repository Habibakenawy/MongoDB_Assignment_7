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

export const aggregateBooksAndBreakArray = async () => {
  return await db
    .collection("books")
    .aggregate([
      { $unwind: "$genres" },
    ])
    .toArray();
};


export const joinLogsAndBooks = async () => {
  return await db
    .collection("logs")
    .aggregate([
      { $lookup:{
        from:"books",
        localField:"book_id",
        foreignField:"_id",
        as:"book_details"
      } },
    ])
    .toArray();
};

// export const joinLogsAndBooks = async () => {
//   return await db.collection("logs").aggregate([
//     {
//       //ensure book_id is definitely an ObjectId before joining
//       $addFields: {
//         book_id_converted: { $toObjectId: "$book_id" }
//       }
//     },
//     {
//       $lookup: {
//         from: "books",            
//         localField: "book_id_converted",
//         foreignField: "_id",
//         as: "book_details"
//       }
//     },
//     {
//       // Filter out any logs that didn't find a match
//       $match: { 
//         "book_details": { $not: { $size: 0 } } 
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         action: 1,
//         book_details: 1
//       }
//     }
//   ]).toArray();
// };