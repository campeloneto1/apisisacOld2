import {Request, Response} from 'express';
import GraduacaoService from '../services/graduacao.service';

async function index(_req:Request, res:Response) {
    const response = await GraduacaoService.index();
    res.status(200).send(response)
}

async function find(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await GraduacaoService.find(req);
        res.status(200).send(response)
    }
}

async function create(req:Request, res:Response) {  
    const response = await GraduacaoService.create(req);
    res.status(200).send(response);
}

async function update(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await GraduacaoService.update(req);
        res.status(200).send(response)
    }
}

async function destroy(req:Request, res:Response) {
    const {id}  = req.params;
    if(Number.isNaN(Number(id))){
        res.status(400).send("O parâmetro informado não é um número.")
    }else{
        const response = await GraduacaoService.destroy(req);
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