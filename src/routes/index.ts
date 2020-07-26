import { Router } from 'express';
import User from '../models/user';
import ExerciseList from '../models/exercise-list';
import Exercise from '../models/exercise';
const router = Router();

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    const exerciseList = await ExerciseList.create({
      userId: (user as any).id,
    });
    await Exercise.create({
      title: 'Push up',
      exerciseListId: (exerciseList as any).id,
    });
    res.status(201).json({ message: 'User Created', data: user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'User Could not Created' });
  }
});

export default router;
