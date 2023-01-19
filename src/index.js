import express from 'express';
import { conn } from '../database/connection.js';
import restaurantRouter from '../router/restaurantRouter.js';
import { Restaurant } from '../database/model/index.js';
import http from 'http';
import { WebSocketServer } from 'ws';
conn();

const app = express();

//initialize a simple http server
const server = http.createServer(app);
const port = 3000;

// WebSocket server instance
const wss = new WebSocketServer({ server });

// Check Restaurant Database

wss.on('connection', (ws) => {
  console.log(ws.eventNames);
  Restaurant.watch().on('change', async (data) => {
    console.log(data);
    if (data.updateDescription.updatedFields) {
      console.log(await data.updateDescription.updatedFields, 111);
      ws.send(JSON.stringify(await data.updateDescription.updatedFields));
    }
  });
  // ws.on('message', (message) => {
  //   console.log(`received ${message}`);
  //   ws.send('Hello');
  // });
});

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/v1/restaurants', restaurantRouter);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
