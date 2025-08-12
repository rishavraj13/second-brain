import mongoose, { model, Schema, Types } from "mongoose";
import { string } from "zod";

console.log("Mongo is connected")
// mongoose.connect("")

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
})

export const UserModel = model("User", UserSchema)

const ContentSchema = new Schema({
    title: string,
    link: string,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: [{ type: mongoose.Types.ObjectId, ref: 'users' }]

})

export const ContentModel = model("Content",ContentSchema);

