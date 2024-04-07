import express from 'express';
import UserControllers from '../controllers/user.controller'

const router = express.Router();

router.get('/', UserControllers.index);
router.get('/:id', UserControllers.find);
router.post('/', UserControllers.create);
router.put('/:id', UserControllers.update);
router.delete('/:id', UserControllers.destroy);

export default router; 