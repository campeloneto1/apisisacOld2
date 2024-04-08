
import { AppDataSource } from "../connection";
import User from "../models/user.model";
import Jwt from '../utilities/jwt'

const userRepository = AppDataSource.getRepository(User)

async function index()  {
    const response = await userRepository.find({relations: ['perfil']});
    return response;
}

async function find(id: number){
    const response = await userRepository.findOne({where: {id: id}, relations: ['perfil']});
    return response;
}

async function create(data:any){
    var user = userRepository.create({...data, createdeBy:1})    
    //const response = await userRepository.save(user).then().catch()
    //return response;
   const response =  await userRepository.save(user).then((response:any) => {
        return response;
    }).catch(({code, errno, sqlMessage}) => {
        return {code, errno, sqlMessage};
    });

    return response;
}

async function update(id: number, data:any){
    var response = await userRepository.findOneBy({id: id});
    if(response){
        const response =  await userRepository.update({id:id},{...data}).then((response:any) => {
            return response;
        }).catch(({code, errno, sqlMessage}) => {
            return {code, errno, sqlMessage};
        });

        return response;
    }else{
        return false; 
    }
}

async function destroy(id: number){
    const response = await userRepository.findOneBy({id: id});
    if(response){
        var response2 = await userRepository.remove(response);
        return response2;
    }else{
        return false; 
    }
    
}

export default {
    index,
    find,
    create,
    update,
    destroy
}
