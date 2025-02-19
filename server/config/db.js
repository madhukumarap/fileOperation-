const mysqli = require("mysqli");

const db = mysqli.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "filemanager",
})
db.connect((err) =>{
    if(err){
        console.log("Error while connecting the database",err);
    }else{
        console.log(" Database Connected Successfully");
    }
})
module.exports = db;