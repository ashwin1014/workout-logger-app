import mongoose from 'mongoose';

import Workout from "../models/workoutModel.mjs";
// import HttpError from "../models/HttpError.mjs";

// * Get All Workouts
const getAllWorkouts = async (req, res) => {
  let workouts;
  try {
    workouts = await Workout.find({}).sort({ createdAt: -1 });
  } catch (err) {
    // const error = new HttpError(err.message, 400); // TODO: Format according to middleware
    // return next(error);
    res.status(400).json({ error: err.message });
  }
  res.status(200).json(workouts);
};

// * Get Single Workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Workout not found'  })
  }

//   let existingWorkout;

//   try {
//     existingWorkout = await Workout.findById(id);
//   } catch (err) {
//     const error = new HttpError('Workout not found', 400);
//     return next(error);
//   }
 const existingWorkout = await Workout.findById(id);
    if (!existingWorkout) {
        res.status(400).json({ error: 'Workout not found' })
    }
    res.status(200).json(existingWorkout);
};

// * Create New Workout
const createWorkout = async (req, res, next) => {
  const { title, reps, load } = req.body;

  try {
    const workout = Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
    // const error = new HttpError(err.message, 400);
    // return next(error);
  }
};

// * Delete Workout
// * Update Workout

export { createWorkout, getAllWorkouts, getSingleWorkout };
