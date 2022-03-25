import mongoose from 'mongoose'

const starbucksToken = new mongoose.Schema({
   name: String,
   kcal: Number
})

export const Starbucks = mongoose.model("Starbucks", starbucksToken)
