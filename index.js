const express=require("express")
const app=express()

app.listen(3000,()=>{
    console.log("server is on port 3000");
})

//req: whatever client sends to server is request
//res: whatever comes back from server is response

app.get('/',(req,res)=>{
    return res.send("hello")
})