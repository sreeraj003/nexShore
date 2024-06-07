const mongoose = require("mongoose")
const airLines = require("../model/airlines.js")
const airports = require("../model/airports.js")
const airRoutes = require("../model/routes.js")


async function checkFlight(req, res) {
    try {
        let { from, to } = req.query
        const fromPlane = await airports.find({ name: from })
        const toPlane = await airports.find({ name: to })
        const fromId = fromPlane._id
        const toId = toPlane._id
        const data = await airRoutes.aggregate([{
            $lookup: {
                from: "airlines",
                localField: "airlineId",
                foreignField: "airlineId",
                as: "airLine"
            }
        }, {
            $match: {
                sourceAirportId: fromId,
                destinationAirportId: toId
            }
        },
        {
            $sort: {
                stops: 1
            }
        },
        {
            $group: {
                _id: "$airlineId",
                airLine: { $first: "$airLine" }
            }
        }
        ])
        res.json(data)
    } catch (error) {
        res.json("error")
    }
}

module.exports = {
    checkFlight
}
// const data = await airRoutes.aggregate([
//     {
//         $lookup: {
//             from: "airports",
//             localField: "sourceAirportId",
//             foreignField: "airportId",
//             as: "sourceAirportDetails"
//         }
//     },
//     {
//         $unwind: "$sourceAirportDetails"
//     },
//     {
//         $lookup: {
//             from: "airports",
//             localField: "destinationAirportId",
//             foreignField: "airportId",
//             as: "destinationAirportDetails"
//         }
//     },
//     {
//         $unwind: "$destinationAirportDetails"
//     },
//     {
//         $project: {
//             _id: 1,
//             airline: 1,
//             sourceAirport: 1,
//             destinationAirport: 1,
//             sourceCountry: "$sourceAirportDetails.country",
//             destinationCountry: "$destinationAirportDetails.country"
//         }
//     },
//     {
//         $match: {
//             sourceCountry: "Switzerland",
//             destinationCountry: "Spain"
//         }
//     }
// ]);