import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.json({msg: "Get all workouts"});
});

router.get('/:id', (_req, res) => {
    res.json({msg: "Get workout by id"});
});

router.post('/', (_req, res) => {
    res.json({msg: "Create a new workout"});
});

router.delete('/:id', (_req, res) => {
    res.json({msg: "Delete a workout"});
});

router.patch('/:id', (_req, res) => {
    res.json({msg: "Update a workout"});
});

export default router;