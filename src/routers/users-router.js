import { Router } from 'express';
const router = Router();

import { createUser, readUser, updateUser, deleteUser } from '../controllers/user-controller.js';

router.post('/', createUser);
router.get('/:email?', readUser);
router.put('/', updateUser);
router.delete('/:email', deleteUser);

export default router