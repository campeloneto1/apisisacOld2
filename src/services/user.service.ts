import {Request, Response} from 'express';
import UserRepositories from '../repositories/user.repository';
import Jwt from '../utilities/jwt';

async function index(){
    const response = await UserRepositories.index();
    return response;
}

async function find(req: Request){
    const {id}  = req.params;
    
    const response = await UserRepositories.find(Number(id));
    return response;
}

async function create(req: Request){
    const token = req.headers['x-access-token'];
    const userId = await Jwt.returnId(token);

    const body = req.body;

    const response = await UserRepositories.create(body, userId);
    return response;
}

async function update(req: Request){
    const {id}  = req.params;
    const body = req.body;

    const token = req.headers['x-access-tokid: numberen'];
    const userId = await Jwt.returnId(token);

    const response = await UserRepositories.update(Number(id), body, userId);
    return response;
}

async function destroy(req: Request){
    const {id}  = req.params;

    const token = req.headers['x-access-token'];
    const userId = await Jwt.returnId(token);

    const response = await UserRepositories.destroy(Number(id), userId);
    return response;
}

export default {
    index,
    find,
    create,
    update,
    destroy
}