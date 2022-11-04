const express = require("express")
const router = express.Router()
const { getFlights,
    updateFlights,
    deleteFlights,
    setFlights,
    } = require("../controllers/flightController")


    router.route("/").get(getFlights).post(setFlights)
    router.route("/:id").put(updateFlights).delete(deleteFlights)


module.exports = router
