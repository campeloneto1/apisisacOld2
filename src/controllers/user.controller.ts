import {Request, Response} from 'express';
import UserServices from '../services/user.service';

async function index(_req:Request, res:Response) {
    const response = await UserServices.index();
    res.status(200).send(response)
}

async function find(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await UserServices.find(Number(id));
        res.status(200).send(response)
    }
}

async function create(req:Request, res:Response) {
    const body = req.body;
    const response = await UserServices.create(body);
    res.status(200).send(response)
}

function update(req:Request, res:Response) {
    const {id}  = req.params;
    const body = req.body;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = UserServices.update(Number(id), body);
        res.status(200).send(response)
    }
}

function destroy(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = UserServices.destroy(Number(id));
        res.status(200).send(response)
    }
}


export default {
    index,
    find,
    create,
    update,
    destroy
}