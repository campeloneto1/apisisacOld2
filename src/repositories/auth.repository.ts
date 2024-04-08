import { AppDataSource } from '../connection';
import User from '../models/user.model';
import Bcrypt from '../utilities/bcrypt';
import Jwt from '../utilities/jwt';

const userRepository = AppDataSource.getRepository(User);

const json = {
    token: '',
    user: {}
}

async function login(data:any) {
    const user = await userRepository.findOne({
        where: {cpf: data.cpf}, 
        
        relations: ['perfil']
    });

    if(user){
        const pass = `${data.password}${user.salt}`;
        //@ts-ignore
        if(await Bcrypt.compareString(pass, user.password)){
            //@ts-ignore
           user.password = '';
           user.salt = '';

           const response = signInJwt(user);
           return response;
           
           //return user;
        }else{
            return false;
        }
    }
}

async function signInJwt(user:any){
    const response = await Jwt.singIn(user);
    if(response){
        json.token = response;
        json.user = user;
        console.log(json);
        return json;
    }
}

export default {
    login
}