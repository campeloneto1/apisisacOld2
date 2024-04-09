
import express from 'express';
import SetorController from '../controllers/setor.controller'

const router = express.Router();

router.get('/', SetorController.index);
router.get('/:id', SetorController.find);
router.post('/', SetorController.create);
router.put('/:id', SetorController.update);
router.delete('/:id', SetorController.destroy);

export default router; 
