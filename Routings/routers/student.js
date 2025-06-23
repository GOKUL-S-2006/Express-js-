import express from "express"
const router=express.Router();
router.get('/all',(req,res)=>{
       res.send("All students")
})
router.post('/post',(req,res)=>{
 res.send("Sign in")
})
router.put('/put',(req,res)=>{
res.send("Update student id")
})
router.delete('/delete',(req,res)=>{
res.send("Remove students from db");
})
export default router;
