import {Request, Response} from 'express';
import CidadeService from '../services/cidade.service';

async function index(_req:Request, res:Response) {
    const response = await CidadeService.index();
    res.status(200).send(response)
}

async function find(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await CidadeService.find(req);
        res.status(200).send(response)
    }
}

async function create(req:Request, res:Response) {  
    const response = await CidadeService.create(req);
    res.status(200).send(response);
}

async function update(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await CidadeService.update(req);
        res.status(200).send(response)
    }
}

async function destroy(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await CidadeService.destroy(req);
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