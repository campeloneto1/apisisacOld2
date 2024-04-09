
import express from 'express';
import PolicialController from '../controllers/policial.controller'

const router = express.Router();

router.get('/', PolicialController.index);
router.get('/:id', PolicialController.find);
router.post('/', PolicialController.create);
router.put('/:id', PolicialController.update);
router.delete('/:id', PolicialController.destroy);

export default router; 
