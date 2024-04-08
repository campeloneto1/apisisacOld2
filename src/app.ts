import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import AuthMiddleware from './middlewares/auth.middleware';

import authRoute from './routes/auth.route';
import userRoute from './routes/user.route';
import perfilRoute from './routes/perfil.route';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/auth', authRoute);
app.use('/users', AuthMiddleware, userRoute);
app.use('/perfis', AuthMiddleware, perfilRoute);

export default app;