import { Router } from "express";
import { insertIntoBookModel,insertManyIntoBookModel,updateBook,findBookbyTitle,findBooksBetweenYears,findBooKByGenre,skipAndLimit,checkYearInt, excludeGenres, deleteBeforeDate,aggregateBooksAfter2000,aggregateBooksAfter2000AndExludeFields,aggregateBooksAndBreakArray,joinLogsAndBooks} from "./book.service.js";

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


router.get("/year" , async (req,res,next)=>{
    const result =  await findBooksBetweenYears(req.query.from,req.query.to)
    return res.status(200).json({message:"Book Found" , result})
})


router.get("/genre" , async (req,res,next)=>{
    const result =  await findBooKByGenre(req.query.genre)
    return res.status(200).json({message:"Book Found" , result})
})

router.get("/skip-limit" , async (req,res,next)=>{
    const result =  await skipAndLimit()
    return res.status(200).json({message:"Book Found" , result})
})


router.get("/year-integer" , async (req,res,next)=>{
    const result =  await checkYearInt()
    return res.status(200).json({message:"Book Found" , result})
})

router.get("/exclude-genres" , async (req,res,next)=>{
    const result =  await excludeGenres()
    return res.status(200).json({message:"Book Found" , result})
})

router.delete("/before-year" , async (req,res,next)=>{
    const result =  await deleteBeforeDate(req.query.year)
    return res.status(200).json({message:"Books Deleted" , result})
})

router.get("/aggregate1" , async (req,res,next)=>{
    const result =  await aggregateBooksAfter2000()
    return res.status(200).json({message:"Books filtered" , result})
})


router.get("/aggregate2" , async (req,res,next)=>{
    const result =  await aggregateBooksAfter2000AndExludeFields()
    return res.status(200).json({message:"Books filtered" , result})
})

router.get("/aggregate3" , async (req,res,next)=>{
    const result =  await aggregateBooksAndBreakArray()
    return res.status(200).json({message:"Books filtered" , result})
})

router.get("/aggregate4" , async (req,res,next)=>{
    const result =  await joinLogsAndBooks()
    return res.status(200).json({message:"Books filtered" , result})
})


export default router