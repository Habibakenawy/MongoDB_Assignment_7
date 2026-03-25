import { Router } from "express";
import { bookModel } from "./collection.service.js";

const router=Router()

router.post("/books" , async (req,res,next)=>{
    const result =  await bookModel()
    return res.status(201).json({message:"Book collection created" , result})
})
export default router