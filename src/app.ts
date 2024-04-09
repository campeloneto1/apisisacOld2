import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import AuthMiddleware from './middlewares/auth.middleware';

import RateLimitMiddleware from './middlewares/rate-limite.middleware';

import authRoute from './routes/auth.route';
import userRoute from './routes/user.route';
import perfilRoute from './routes/perfil.route';
import unidadeRoute from './routes/unidade.route';
import subunidadeRoute from './routes/subunidade.route';
import setorRoute from './routes/setor.route';
import paisRoute from './routes/pais.route';
import estadoRoute from './routes/estado.route';
import cidadeRoute from './routes/cidade.route';
import graduacaoRoute from './routes/graduacao.route';
import sexoRoute from './routes/sexo.route';
import policialRoute from './routes/policial.route';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(RateLimitMiddleware.globalLimiter);
app.use('*', AuthMiddleware);

app.use('/auth', RateLimitMiddleware.authLimiter, authRoute);
app.use('/users', userRoute);
app.use('/perfis', perfilRoute);
app.use('/unidades', unidadeRoute);
app.use('/subunidades', subunidadeRoute);
app.use('/setores', setorRoute);
app.use('/paises', paisRoute);
app.use('/estados', estadoRoute);
app.use('/cidades', cidadeRoute);
app.use('/graduacoes', graduacaoRoute);
app.use('/sexos', sexoRoute);
app.use('/policiais', policialRoute);

export default app;