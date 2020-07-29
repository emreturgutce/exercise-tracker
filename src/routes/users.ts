import { Router } from 'express';
import User from '../models/user';
const router = Router();

/**
 * @description Turn all users
 */
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ where: {} });
    res.status(200).json({
      message: 'Fetched all users',
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Could not fetched users',
      error: err,
    });
  }
});

/**
 * @description Create new user
 */
router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      throw new Error('All fields should be filled');
    }
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({ message: 'User created', data: user });
  } catch (err) {
    res.status(400).json({ message: 'User could not created', error: err });
  }
});

/**
 * @param id
 * @description Turn a user with the given id
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user === null) throw new Error('User not found');
    res.status(200).json({
      message: 'User fetched',
      data: user,
    });
  } catch (err) {
    res.status(400).json({ message: 'User Could not fetched', error: err });
  }
});

export default router;
