
import express from 'express';
import SubunidadeController from '../controllers/subunidade.controller'

const router = express.Router();

router.get('/', SubunidadeController.index);
router.get('/:id', SubunidadeController.find);
router.post('/', SubunidadeController.create);
router.put('/:id', SubunidadeController.update);
router.delete('/:id', SubunidadeController.destroy);

export default router; 
