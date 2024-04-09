
import express from 'express';
import CidadeController from '../controllers/cidade.controller'

const router = express.Router();

router.get('/', CidadeController.index);
router.get('/:id', CidadeController.find);
router.post('/', CidadeController.create);
router.put('/:id', CidadeController.update);
router.delete('/:id', CidadeController.destroy);

export default router; 
