/* exports.exampleModel = []; */
const mongoose = require("mongoose")

const flightSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    time: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }

})
module.exports = mongoose.model("Flight", flightSchema)