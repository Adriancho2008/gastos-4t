const express = require("express")
const app = express()
let puerto = 3000


app.get('/',(re1,res)=>{
    res.send("test")
})



app.listen(port,()=>{

    console.log(`corriendo en el ${port}`)
})