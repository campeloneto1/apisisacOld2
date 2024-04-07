import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const SERV_PORT = process.env.SERV_PORT ? process.env.SERV_PORT : 3333;

app.listen(SERV_PORT, () => {
    console.log(`Servidor rodando na porta ${SERV_PORT}`);
});