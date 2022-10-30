import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

import logger from './app/utils/logger.mjs';
import workoutRoutes from './app/routes/workouts.mjs';
import { GET_WORKOUTS } from './app/constants/routes.mjs';
import HttpError from './app/models/HttpError.mjs';

const app = express();
const port = process.env.PORT;
const URI = process.env.DB_URI;

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

// handle route not found
app.use((req, res, next) => {
  const error = new HttpError('Route not found', 404);
  throw error;
});

// Error MIddleware
app.use((error, req, res, next) => {
  // if (req.file) {
  //   fs.unlink(req.file.path, err => {
  //     console.log(err);
  //   });
  // }
  // if (res.headerSent) {
  //   return next(error);
  // }
  res.status(error.code || 500)
    .json({ message: error.message || 'Unknown Error Occurred' });
});

/**
 * DB Connect
 */
mongoose.connect(URI).then(() => {

  app.listen(port, () => {
    logger.success('Connection Established, Server Started');
    logger.success(`Server is running on port ${port}`);
  });

}).catch((error) => {
  logger.error(error)
})

// app.listen(port, () => {
//   logger.success(`Server is running on port ${port}`);
// });
