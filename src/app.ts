import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
