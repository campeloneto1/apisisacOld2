import UserRepositories from '../repositories/user.repository';

async function index(){
    const response = await UserRepositories.index();
    return response;
}

async function find(id: number){
    const response = await UserRepositories.find(id);
    return response;
}

async function create(data:any){
    const response = await UserRepositories.create(data);
    return response;
}

function update(id: number, data:any){
    const response = UserRepositories.update(id, data);
    return response;
}

function destroy(id: number){
    const response = UserRepositories.destroy(id);
    return response;
}

export default {
    index,
    find,
    create,
    update,
    destroy
}