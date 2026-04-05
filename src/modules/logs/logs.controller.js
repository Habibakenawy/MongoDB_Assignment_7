import { Router } from "express";
import { insertIntoLogModel } from "./logs.service.js";

const router = Router()



router.post("/" , async (req,res,next)=>{
    const result =  await insertIntoLogModel(req.body)
    return res.status(201).json({message:"Log data inserted" , result})
})













export default router