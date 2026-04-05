import { Router } from "express";
import { insertIntoBookModel,insertManyIntoBookModel,updateBook,findBookbyTitle} from "./book.service.js";

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


router.get("/title" , async (req,res,next)=>{
    const result =  await findBookbyTitle(req.query.title)
    return res.status(200).json({message:"Book Found" , result})
})










export default router