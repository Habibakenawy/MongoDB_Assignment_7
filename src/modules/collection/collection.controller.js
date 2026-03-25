import { Router } from "express";
import { bookModel,authorModel } from "./collection.service.js";

const router=Router()

router.post("/books" , async (req,res,next)=>{
    const result =  await bookModel()
    return res.status(201).json({message:"Book collection created" , result})
})

router.post("/authors" , async (req,res,next)=>{
    const result =  authorModel.insertOne(req.body)
    return res.status(201).json({message:"Author collection created and an author was inserted" , result})
})
export default router