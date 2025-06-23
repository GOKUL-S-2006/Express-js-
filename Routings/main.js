import express from 'express'
import student from './routers/student.js';
import teacher from './routers/teacher.js';
const app=express();
//1. Create routes folder and put your  routes in sep folder
//2. create instance of  express.Router()
//3. Instead of app.method change that to "router.method"
//4. Export router
//5. Import Router
//6 use the (app.use) built-in middleware & provide your routes
app.use("/student",student);
app.use("/teacher",teacher);
app.listen(8000,()=>{
    console.log("server is up")
})
