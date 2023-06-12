import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/LoginRequired';

const router = new Router();

// Não deveria existir
router.get('/', userController.index); // Lista usuários
router.get('/:id', userController.show); // Lista usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
