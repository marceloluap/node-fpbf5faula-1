import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.routes';
import statusRoute from './routes/status.routes';

const app = express();

app.use(express.json());

app.use(usersRoute);
app.use(statusRoute);

app.listen(3000, () => {
  console.log('Estou funcionando');
});
