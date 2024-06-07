const express = require("express")
const airRoutes = express()
const airController = require("../controller/airController")

airRoutes.get("/checkFlight", airController.checkFlight)
// airRoutes.get("/checkFlight", () => console.log(2), airController.checkAirports)


module.exports = airRoutes


