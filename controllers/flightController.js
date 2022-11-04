const asyncHandler = require("express-async-handler")

const Flight = require("../models/Flight")

//@desc  Get Flights
//@routes  Get /api/flights 
//@access 
const getFlights = asyncHandler(async (req, res) => {
    const flights = await Flight.find()
    res.status(200).json(flights)
})

//@desc  Set Flights
//@routes  Post /api/flights 
//@access 
const setFlights = asyncHandler(async(req, res) => {

    if (!req.body.text) {
        res.status(400)
            throw new Error("please add a text field" )
    }

    const flight = await Flight.create({
        title: req.body.title,
        time: req.body.time,
        price: req.body.date,
        date: req.body.date,

    })
    res.status(200).json(flight)

})

//@desc  Update Flights
//@routes  put /api/flights/:id
//@access 
const updateFlights = asyncHandler(async (req, res) => {
    
    const flight = await Flight.findById(req.params.id)
    
    if (!flight) {
        res.status(400)
        throw new Error("flight no found")
    }

    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id,  req.body, {new: true})

    res.status(200).json(updatedFlight)
})

//@desc  Delete Flights
//@routes  Delete /api/flights/:id 
//@access 
const deleteFlights = asyncHandler(async(req, res) => {

    const flight = await Flight.findById(req.params.id)
    
    if (!flight) {
        res.status(400)
        throw new Error("flight no found")
    }

    await flight.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getFlights,
    setFlights,
    updateFlights,
    deleteFlights,
}