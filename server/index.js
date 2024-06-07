const express = require("express")
const app = express()
const MongoDB = require("./config/mongo").connect()




app.listen(process.env.PORT || 8080, () => console.log("server running on 8080"))