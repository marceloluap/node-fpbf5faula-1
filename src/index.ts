import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(201).send({ foo: 'bar' });
});

app.listen(3000, () => {
  console.log('Estou funcionando');
});
