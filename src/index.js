import express from 'express';
import { conn } from '../database/connection.js';
const app = express();
const port = 3000;

conn();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
