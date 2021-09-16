import express from 'express';
import { createUrl } from './createUrl';
const router = express.Router();

router.post('/', createUrl);

export default router;
