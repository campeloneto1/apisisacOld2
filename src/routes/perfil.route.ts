
import express from 'express';
import PerfilController from '../controllers/perfil.controller'

const router = express.Router();

router.get('/', PerfilController.index);
router.get('/:id', PerfilController.find);
router.post('/', PerfilController.create);
router.put('/:id', PerfilController.update);
router.delete('/:id', PerfilController.destroy);

export default router; 
