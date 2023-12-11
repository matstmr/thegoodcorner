import "reflect-metadata"
import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { dataSource } from './config/db';
import adController from './controllers/ad.controller';
import categoryController from './controllers/category.controller';

const db = new sqlite3.Database('./good_corner.sqlite');

const app = express();

const port: number = 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use('/ads', adController)
app.use('/categories', categoryController)


app.listen(port, () => {
  dataSource.initialize();
  console.log(`Server started at http://localhost:${port}`);
});