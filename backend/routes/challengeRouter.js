import express from 'express';
import {
  createChallenge,
  getActiveChallenge,
  submitToChallenge,
  getAllChallenges,
  getFriendsInChallenge
} from '../controllers/challengeController.js';
import { verifyToken, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Protected route for admin
router.post('/', verifyToken, isAdmin, createChallenge);

// Protected route for users
router.get('/active', verifyToken, getActiveChallenge);
router.get('/all', verifyToken, getAllChallenges);
router.post('/submit', verifyToken, submitToChallenge);
router.get('/friends/:challengeId', verifyToken, getFriendsInChallenge);

export default router;