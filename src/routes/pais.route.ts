
import express from 'express';
import PaisController from '../controllers/pais.controller'

const router = express.Router();

router.get('/', PaisController.index);
router.get('/:id', PaisController.find);
router.post('/', PaisController.create);
router.put('/:id', PaisController.update);
router.delete('/:id', PaisController.destroy);

export default router; 
