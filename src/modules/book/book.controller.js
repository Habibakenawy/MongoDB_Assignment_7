import { Router } from "express";
import { insertIntoBookModel } from "./book.service.js";

const router = Router()



router.post("/" , async (req,res,next)=>{
    const result =  await insertIntoBookModel(req.body)
    return res.status(201).json({message:"Book data inserted" , result})
})












export default router