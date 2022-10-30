import express from "express";

import { 
    createWorkout,
    getAllWorkouts,
    getSingleWorkout
 } from "../controllers/workoutController.mjs";


const workoutRoutes = express.Router();

workoutRoutes.get("/", getAllWorkouts);

workoutRoutes.get("/:id", getSingleWorkout);

workoutRoutes.post("/", createWorkout);

workoutRoutes.delete("/:id", (_req, res) => {
  res.json({ msg: "Delete a workout" });
});

workoutRoutes.patch("/:id", (_req, res) => {
  res.json({ msg: "Update a workout" });
});

export default workoutRoutes;
