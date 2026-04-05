import { Router } from "express";
import { insertIntoBookModel,insertManyIntoBookModel,updateBook} from "./book.service.js";

const router = Router()



router.post("/" , async (req,res,next)=>{
    const result =  await insertIntoBookModel(req.body)
    return res.status(201).json({message:"Book data inserted" , result})
})



router.post("/batch" , async (req,res,next)=>{
    const result =  await insertManyIntoBookModel(req.body)
    return res.status(201).json({message:"Book data inserted" , result})
})


router.patch("/Future" , async (req,res,next)=>{
    const result =  await updateBook()
    return res.status(201).json({message:"Book Date Updated" , result})
})









export default router