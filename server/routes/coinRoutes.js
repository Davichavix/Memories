import express from 'express'

import { getCoinData } from '../controllers/coinData.js';

const router = express.Router();

router.get('/:id', getCoinData);

export default router;