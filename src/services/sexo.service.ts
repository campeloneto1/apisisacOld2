import {Request, Response} from 'express';
import SexoRepository from "../repositories/sexo.repository";
import Jwt from '../utilities/jwt';

async function index(){
    const response = await SexoRepository.index();
    return response;
}

async function find(req: Request){
    const {id}  = req.params;
    
    const response = await SexoRepository.find(Number(id));
    return response;
}

async function create(req: Request){
    const token = req.headers['x-access-token'];
    const userId = await Jwt.returnId(token);

    const body = req.body;

    const response = await SexoRepository.create(body, userId);
    return response;
}

async function update(req: Request){
    const {id}  = req.params;
    const body = req.body;

    const token = req.headers['x-access-tokid: numberen'];
    const userId = await Jwt.returnId(token);

    const response = SexoRepository.update(Number(id), body, userId);
    return response;
}

async function destroy(req: Request){
    const {id}  = req.params;

    const token = req.headers['x-access-token'];
    const userId = await Jwt.returnId(token);

    const response = SexoRepository.destroy(Number(id), userId);
    return response;
}

export default {
    index,
    find,
    create,
    update,
    destroy
}