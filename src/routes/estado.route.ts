
import express from 'express';
import EstadoController from '../controllers/estado.controller'

const router = express.Router();

router.get('/', EstadoController.index);
router.get('/:id', EstadoController.find);
router.post('/', EstadoController.create);
router.put('/:id', EstadoController.update);
router.delete('/:id', EstadoController.destroy);

export default router; 
