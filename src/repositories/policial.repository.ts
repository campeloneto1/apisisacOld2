import { AppDataSource } from "../connection";
import Policial from "../models/policial.model";

const modelRepository = AppDataSource.getRepository(Policial)

async function index()  {
    const response = await modelRepository.find({ relations: ['created_by', 'updated_by']});
    return response;
}

async function find(id: number){
    const response = await modelRepository.findOne({where: {id: id}, relations: ['created_by', 'updated_by']});
    return response;
}

async function create(data:any, userId:any){
    var object = modelRepository.create({...data, createdBy: userId})  
    const response =  await modelRepository.save(object).then((response:any) => {
        return response;
    }).catch(({code, errno, sqlMessage}) => {
        return {code, errno, sqlMessage};
    });
    return response;
}

async function update(id: number, data:any, userId:any){
    var response = await modelRepository.findOneBy({id: id});
    if(response){
        const response =  await modelRepository.update({id:id},{...data, updatedBy: userId}).then((response:any) => {
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
    const response = await modelRepository.findOneBy({id: id});
    if(response){
        var response2 = await modelRepository.remove(response);
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