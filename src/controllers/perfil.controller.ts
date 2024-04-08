import {Request, Response} from 'express';
import PerfilServices from '../services/perfil.service';

async function index(_req:Request, res:Response) {
    const response = await PerfilServices.index();
    res.status(200).send(response)
}

async function find(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await PerfilServices.find(Number(id));
        res.status(200).send(response)
    }
}

async function create(req:Request, res:Response) {
    const body = req.body;
    const response = await PerfilServices.create(body);
    res.status(200).send(response)
}

async function update(req:Request, res:Response) {
    const {id}  = req.params;
    const body = req.body;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await PerfilServices.update(Number(id), body);
        res.status(200).send(response)
    }
}

async function destroy(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await PerfilServices.destroy(Number(id));
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