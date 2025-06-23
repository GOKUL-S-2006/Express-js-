import express from "express"
const router=express.Router();
router.get('/all',(req,res)=>{
       res.send("All Teachers")
})
router.post('/post',(req,res)=>{
 res.send("Sign in")
})
router.put('/put',(req,res)=>{
res.send("Update Teachers id")
})
router.delete('/delete',(req,res)=>{
res.send("Remove Teachers from db");
})
export default router;
