import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET:any = process.env.JWT_SECRET;

async function singIn(data:any){
   const token =  jwt.sign({
        data: data
      }, JWT_SECRET, { expiresIn: 86400 });

    return token;     
}

async function verify(token:any){
    var decoded = jwt.verify(token, JWT_SECRET);
   return decoded;
}

export default {
    singIn,
    verify
}