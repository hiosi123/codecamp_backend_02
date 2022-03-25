import mongoose from 'mongoose'

const userToken = new mongoose.Schema({
    name: String,
    email: String,
    personal: String,
    prefer: String,
    pwd: String,
    phone: String,

})

export const User = mongoose.model("User", userToken)
