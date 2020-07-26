import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();
import './config/database';
import rootRouter from './routes';
import notFound from './middleware/not-found';
import errorHandler from './middleware/error-handler';
import 'colors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use('/', rootRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`.blue.bold));

export default app;
