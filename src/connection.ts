import {DataSource} from 'typeorm';
import "reflect-metadata";
import dotenv from 'dotenv';
dotenv.config();

import Cidade from './models/cidade.model';
import Estado from './models/estado.model';
import Graduacao from './models/graduacao.model';
import Pais from './models/pais.model';
import Perfil from './models/perfil.model';
import Policial from './models/policial.model';
import Sexo from './models/sexo.model';
import Setor from './models/setor.model';
import Subunidade from './models/subunidade.model';
import Unidade from './models/unidade.model';
import User from './models/user.model';

const TORM_HOST = process.env.TORM_HOST;
const TORM_PORT = process.env.TORM_PORT;
const TORM_USER = process.env.TORM_USER;
const TORM_PASS = process.env.TORM_PASS;
const TORM_DB = process.env.TORM_DB;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: TORM_HOST,
    port: Number(TORM_PORT),
    username: TORM_USER,
    password: TORM_PASS,
    database: TORM_DB,
    synchronize: true,
    logging: true,
    entities: [
        Cidade, 
        Estado, 
        Graduacao, 
        Pais, 
        Perfil, 
        Policial,
        Setor, 
        Sexo,
        Subunidade, 
        Unidade, 
        User, 
    ],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))