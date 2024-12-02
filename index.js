const express = require("express");
const app = express()
const port = 5000
const {authCourse,authPage} = require("./middleware/middleware")

app.use(express.json())

app.get("/",(req,res)=>{
    res.json("hello")
})
app.get("/course/grades",authPage(["teacher","admin"]),(req,res)=>{
    res.json({
        type:"success",
        data:{
            listOfGrades:{
                pedro:100,
                max:90,
                uwi:100,
                dre:50
            }
        }
       
    })
})
app.get("/course/:number",authCourse,(req,res)=>{
    const courseNumber = req.params.number;
    res.json({
        message:`You have permission to access course number ${courseNumber}`
    })
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})