// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Result Schema
const ResultSchema = new Schema({
    name: String,
    score: Number,
    answers : [{type:String}] ,
    date: Date,

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    test: {
        type: Schema.ObjectId,
        ref: 'Test'
    }
})

const Result = module.exports = mongoose.model('Result', ResultSchema)
// Get Results By Name (Not Used)
module.exports.getResultsByName = function (name, callback) {
    const query = { name: name }
    Result.find(query, callback)
}
// Register Quiz Result
module.exports.registerResult = function (newResult, callback) {
    newResult.save(callback)
}