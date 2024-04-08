import { AppDataSource } from "../connection";
import Perfil from "../models/perfil.model";

const perfilRepository = AppDataSource.getRepository(Perfil)

async function index()  {
    const response = await perfilRepository.find({ relations: ['created_by', 'updated_by']});
    return response;
}

async function find(id: number){
    const response = await perfilRepository.findOne({where: {id: id}, relations: ['created_by', 'updated_by']});
    return response;
}

async function create(data:any, userId:any){
    var perfil = perfilRepository.create({...data, createdBy: userId})  
    const response =  await perfilRepository.save(perfil).then((response:any) => {
        return response;
    }).catch(({code, errno, sqlMessage}) => {
        return {code, errno, sqlMessage};
    });
    return response;
}

async function update(id: number, data:any, userId:any){
    var response = await perfilRepository.findOneBy({id: id});
    if(response){
        const response =  await perfilRepository.update({id:id},{...data, updatedBy: userId}).then((response:any) => {
            return response;
        }).catch(({code, errno, sqlMessage}) => {
            return {code, errno, sqlMessage};
        });

        return response;
    }else{
        return false; 
    }
}

async function destroy(id: number, userId:any){
    const response = await perfilRepository.findOneBy({id: id});
    if(response){
        var response2 = await perfilRepository.remove(response);
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