import express from 'express';
import AuthController from '../controllers/auth.controller';
const router = express.Router();

router.post('/', AuthController.login);

export default router;