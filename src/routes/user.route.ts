import express from 'express';
import UserController from '../controllers/user.controller'

const router = express.Router();

router.get('/', UserController.index);
router.get('/:id', UserController.find);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

export default router; 