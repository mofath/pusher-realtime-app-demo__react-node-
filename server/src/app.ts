import express, { Request, Response } from 'express';
import Pusher from 'pusher';
import cors from 'cors';
import config from './config';

const PORT = 3001;

const app = express();

const pusher = new Pusher({
  appId: config.pusher.appId,
  key: config.pusher.key,
  secret: config.pusher.secret,
  cluster: config.pusher.cluster,
  useTLS: true,
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/action/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  pusher.trigger('channel', 'event-name', {
    msg: 'action-triggered',
    id,
  });

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
