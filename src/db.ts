import { model,Schema } from "mongoose";

console.log("Mongo is connected")


const UserSchema = new Schema({
    username: {type:String, unique: true},
    password: String,
    email: {type: String, unique: true},
})

export const UserModel =  model("User",UserSchema)
