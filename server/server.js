import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import logger from './app/utils/logger.mjs';
import workoutRoutes from './app/routes/workouts.mjs';
import { GET_WORKOUTS } from './app/constants/routes.mjs';

const app = express();
const port = process.env.PORT;

/**
 * Middleware
 */
app.use(express.json()); // Checks for response body and parses to json
app.use((req, _res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
})

// app.get('/', (_req, res) => {
//     res.json({msg: "Welcome to the server"});
// })

/**
 * Routes
 */
app.use(GET_WORKOUTS, workoutRoutes);

app.listen(port, () => {
  logger.success(`Server is running on port ${port}`);
});
