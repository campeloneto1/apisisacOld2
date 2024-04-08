
import { AppDataSource } from "../connection";
import User from "../models/user.model";

const userRepository = AppDataSource.getRepository(User)

async function index()  {
    const response = await userRepository.find({relations: ['perfil', 'created_by', 'updated_by']});
    return response;
}

async function find(id: number){
    const response = await userRepository.findOne({where: {id: id}, relations: ['perfil', 'created_by', 'updated_by', 'deleted_by']});
    return response;
}

async function create(data:any, userId:any){
    var user = userRepository.create({...data, createdBy: userId})    
   const response =  await userRepository.save(user).then((response:any) => {
        return response;
    }).catch(({code, errno, sqlMessage}) => {
        return {code, errno, sqlMessage};
    });
    return response;
}

async function update(id: number, data:any, userId:any){
    var response = await userRepository.findOneBy({id: id});
    if(response){
        const response =  await userRepository.update({id:id},{...data, updatedBy: userId}).then((response:any) => {
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
