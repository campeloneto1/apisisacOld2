
import express from 'express';
import PerfilControllers from '../controllers/perfil.controller'

const router = express.Router();

router.get('/', PerfilControllers.index);
router.get('/:id', PerfilControllers.find);
router.post('/', PerfilControllers.create);
router.put('/:id', PerfilControllers.update);
router.delete('/:id', PerfilControllers.destroy);

export default router; 
