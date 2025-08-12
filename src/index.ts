import express from 'express'
import mongoose from 'mongoose'
import { UserModel } from './db'
import * as zod from "zod";
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt';
const JWT_USER = '1452dsufberf'

const app = express()
app.use(express.json())

app.post("/api/v1/signup", async (req, res) => {

    const requireBody = zod.object({
        username: zod.string().min(6).max(15),
        password: zod.string().min(7).max(20),
        email: zod.string().min(7).email(),

    })

    const parseDatawithSuccess = requireBody.safeParse(req.body)

    if (!parseDatawithSuccess.success) {
        return res.status(403).json({
            message: "Incorrect data format",
            error: parseDatawithSuccess.error,
        })
    }

    try {
        const {
            username,
            password,
            email,
        } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        await UserModel.create({
            username: username,
            password: String,
            email: String,
        })

        return res.status(200).json({
            message:"you have Signed Up Successfully"
        })


    } catch (error) {
        return res.status(200).json({
            message: "Error while Signing up!"
        })
    }

    
})

app.post("/api/v1/signin", async(req, res) => {

    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const existinguser = await UserModel.findOne({
        email,
        password,
    })

    // const passwordMatch = bcrypt.compare(password, existinguser.password)
    
    if(existinguser){
        const token = jwt.sign({
            id: existinguser._id,

        },JWT_USER)
    }
    else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }


})

app.post("/api/v1/content", (req, res) => {

})

app.get("/api/v1/content", (req, res) => {

})

app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})
