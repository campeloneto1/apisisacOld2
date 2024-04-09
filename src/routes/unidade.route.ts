
import express from 'express';
import UnidadeController from '../controllers/unidade.controller'

const router = express.Router();

router.get('/', UnidadeController.index);
router.get('/:id', UnidadeController.find);
router.post('/', UnidadeController.create);
router.put('/:id', UnidadeController.update);
router.delete('/:id', UnidadeController.destroy);

export default router; 
