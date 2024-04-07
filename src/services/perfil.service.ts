import PerfilRepository from "../repositories/perfil.repository";

async function index(){
    const response = await PerfilRepository.index();
    return response;
}

async function find(id: number){
    const response = await PerfilRepository.find(id);
    return response;
}

async function create(data:any){
    const response = await PerfilRepository.create(data);
    return response;
}

function update(id: number, data:any){
    const response = PerfilRepository.update(id, data);
    return response;
}

function destroy(id: number){
    const response = PerfilRepository.destroy(id);
    return response;
}

export default {
    index,
    find,
    create,
    update,
    destroy
}