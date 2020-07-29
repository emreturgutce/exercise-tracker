import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import './config/database';
import usersRouter from './routes/users';
import notFound from './middleware/not-found';
import errorHandler from './middleware/error-handler';
import 'colors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use('/users', usersRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
