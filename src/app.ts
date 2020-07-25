import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rootRouter from './routes';
import notFound from './middleware/notFound';
import errorHandler from './middleware/errorHandler';
import 'colors';

dotenv.config();

import './config/database';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use('/', rootRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`.blue.bold));
