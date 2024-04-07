import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import UserRoute from './routes/user.route';
import PerfilRoute from './routes/perfil.route';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/users', UserRoute);
app.use('/perfis', PerfilRoute);

export default app;