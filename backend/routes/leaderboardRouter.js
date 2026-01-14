import express from 'express';
import {
    getTopArtworks,
    getStreakLeaders
} from '../controllers/leaderboardController.js';

const router = express.Router();

// Public routes
router.get('/artworks', getTopArtworks);
router.get('/streaks', getStreakLeaders);

export default router;
