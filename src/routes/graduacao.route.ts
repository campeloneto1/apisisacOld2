
import express from 'express';
import GraduacaoController from '../controllers/graduacao.controller'

const router = express.Router();

router.get('/', GraduacaoController.index);
router.get('/:id', GraduacaoController.find);
router.post('/', GraduacaoController.create);
router.put('/:id', GraduacaoController.update);
router.delete('/:id', GraduacaoController.destroy);

export default router; 
