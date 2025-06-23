import express from 'express'
//Router Params
//ecom/products/iphone/:iphone
const app=express();
//Getting product data using route params
app.get('/product/:category/:id',(req,res)=>
{    
    //Destructure 
    const {category,id}=req.params;
    res.send(`Product Category (${category}) & Product ID (${id})`);
    

})
app.get("/product/order/:day/:month/:year",(req,res)=>
{
    const {day,month,year}=req.params;
    res.send(`product was ordered on:${day}/${month}/${year}`);

})
app.listen(8000,()=>{
    console.log("server is up")
})
