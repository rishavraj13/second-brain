import mongoose, { model, Schema, Types } from "mongoose";
import { string } from "zod";
import { required } from "zod/mini";

console.log("Mongo is connected")
mongoose.connect("mongodb+srv://rishavraj23:nOX7V8FmUTbZo5BD@cluster0.43t0dlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

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
    userId: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
    contentId:[{type: mongoose.Types.ObjectId, ref:'content'}]
})

export const ContentModel = model("Content",ContentSchema);

const ShareLink = new Schema({
    hash: [{type: String, required: true}],
    userId:[{type: mongoose.Types.ObjectId,ref:'user',required:true}]
})

export const ShareLinkModel = model("Link", ShareLink);

