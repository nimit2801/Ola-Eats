import express from 'express';
import { conn } from '../database/connection.js';
import restaurantRouter from '../router/restaurantRouter.js';
const app = express();
const port = 3000;
conn();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/v1/restaurants', restaurantRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
