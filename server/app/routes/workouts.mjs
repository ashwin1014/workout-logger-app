import express from 'express';

const workoutRoutes = express.Router();

workoutRoutes.get('/', (_req, res) => {
    res.json({msg: "Get all workouts"});
});

workoutRoutes.get('/:id', (_req, res) => {
    res.json({msg: "Get workout by id"});
});

workoutRoutes.post('/', (_req, res) => {
    res.json({msg: "Create a new workout"});
});

workoutRoutes.delete('/:id', (_req, res) => {
    res.json({msg: "Delete a workout"});
});

workoutRoutes.patch('/:id', (_req, res) => {
    res.json({msg: "Update a workout"});
});

export default workoutRoutes;