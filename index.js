const express = require("express");
const app = express();
const PORT = process.env.PORT || 1604;


app.get("/api",(req,res)=> {
	res.json({"ritu":"rw"});
});


app.listen(PORT,()=> console.log(`on port ${PORT}`));
