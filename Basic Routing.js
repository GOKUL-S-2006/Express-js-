import express from 'express'
const app=express();


app.get('/',(req,res)=>{
      res.send("<h1>Welcome to HOME PAGE</h1> ");
});
app.get('/about',(req,res)=>{
    res.send("<h1>WELCOME TO ABOUT PAGE</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>Welcome to contace page</h1>")
})

app.listen(9000,()=>console.log("Server's up"));
