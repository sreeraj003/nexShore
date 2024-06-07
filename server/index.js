require("./config/mongo").connect()
const express = require("express")
const airRoutes = require("./routes/airRoutes")
const cors = require("cors")
const app = express()
app.use(cors())
app.use("/", airRoutes)


app.listen(process.env.PORT || 8080, () => console.log("server running on 8080"))