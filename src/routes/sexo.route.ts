
import express from 'express';
import SexoController from '../controllers/sexo.controller'

const router = express.Router();

router.get('/', SexoController.index);
router.get('/:id', SexoController.find);
router.post('/', SexoController.create);
router.put('/:id', SexoController.update);
router.delete('/:id', SexoController.destroy);

export default router; 
