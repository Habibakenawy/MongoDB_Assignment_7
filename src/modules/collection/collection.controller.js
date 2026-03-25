import { Router } from "express";
import { bookModel,authorModel,logsModel, createIndexforBooks} from "./collection.service.js";

const router=Router()

router.post("/books" , async (req,res,next)=>{
    const result =  await bookModel()
    return res.status(201).json({message:"Book collection created" })
})

router.post("/authors" , async (req,res,next)=>{
    const result =  authorModel.insertOne(req.body)
    return res.status(201).json({message:"Author collection created and an author was inserted" , result})
})

router.post("/logs/capped" , async (req,res,next)=>{
    const result =  await logsModel()
    return res.status(201).json({message:"Logs collection created" })
})

router.post("/books/index" , async (req,res,next)=>{
    const result =  await  createIndexforBooks()
    return res.status(201).json({message:"Title index created for Books Collection" , result})
})


export default router