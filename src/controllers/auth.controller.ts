import {Request, Response} from 'express';
import AuthService from '../services/auth.service'; 

async function login(req: Request, res:Response) {
    const body = req.body;
    const data = await AuthService.login(body);
     if(data){
        res.status(200).json(data);
     }else{
        res.status(401).json({mensagem: "Usuário ou senha inválido"});
     }
}

export default {
    login
}