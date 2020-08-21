import * as express from 'express';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { routes } from './routes/Routes';

// Environment Config
dotenv.config({path: '../.env'});
const {SERVER_PORT} = process.env;

//DB
createConnection().then(async () => {

//EXPRESS
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
  routes(app);

  // Server Run
  app.listen(SERVER_PORT, () => {
    console.log('Server running on Port: ' + SERVER_PORT);
  });
}).catch(error => console.log(error));

