import jwt, { decode } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express';
import { JWT_USER } from './config';
export const UserMiddleware = (req:Request, res:Response, next:NextFunction) =>{
    const headers = req.headers["authorization"];
    const decoded = jwt.verify(headers as string, JWT_USER)

    if(decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next()
    }

    else{
        res.status(403).json({
            message: "you are not logged in "
        })
    }
}