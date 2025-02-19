const express = require("express");
const app = express();

const PORT = 5000
app.get('/hello',(req,res)=>{
     res.send(
        "hello welcome to Filemanager"
    )
})
//https://www.bootdey.com/snippets/tagged/file-manager

app.listen(PORT,()=>{
    console.log("THE SERVER RUN SUCCESSFULLY IN PORT",{PORT})
})