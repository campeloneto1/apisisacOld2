import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export default function VerifyToken(req:Request, res:Response, next:NextFunction){
    const token = req.headers['x-access-token'];
    if(token){
        //@ts-ignore
        jwt.verify(token, JWT_SECRET, function(err, decoded) {
            if (err) return res.status(401).send({ auth: false, message: 'Falha ao autenticar o token.' });
         
            next();
        });
    }else{
        res.status(401).json("Necessário realizar login")
    }
}