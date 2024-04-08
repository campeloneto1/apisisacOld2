import { AppDataSource } from "../connection";
import Perfil from "../models/perfil.model";

const perfilRepository = AppDataSource.getRepository(Perfil)

async function index()  {
    const response = await perfilRepository.find();
    return response;
}

async function find(id: number){
    const response = await perfilRepository.findOneBy({id: id});
    return response;
}

async function create(data:any){
    var user = new Perfil();
    user = {...data};
    const response = await perfilRepository.save(user).then((response:any) => {
        return response;
    }).catch(({code, errno, sqlMessage}) => {
        return {code, errno, sqlMessage};
    })
    return response;
}

async function update(id: number, data:any){
    var response = await perfilRepository.findOneBy({id: id});
    if(response){
        const response =  await perfilRepository.update({id:id},{...data}).then((response:any) => {
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