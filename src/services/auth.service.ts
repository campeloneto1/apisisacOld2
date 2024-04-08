import AuthRepository from '../repositories/auth.repository';

async function login (data:any) {    
    if(!data.cpf || !data.password){
        return false;
    }
    const response = await AuthRepository.login(data);
   
    if(response){     
        return response;
    }else{
        return false;
    }
    
}

export default {
    login
}