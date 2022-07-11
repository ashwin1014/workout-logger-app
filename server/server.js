import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import logger from './logger.mjs';

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
})

app.get('/', (_req, res) => {
    res.json({msg: "Welcome to the server"});
})

app.listen(port, () => {
  logger.success(`Server is running on port ${port}`);
});
