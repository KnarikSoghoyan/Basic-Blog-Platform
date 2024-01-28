import { Router } from 'express';
const router = Router();

import { loginUser, registrateUser } from '../controllers/auth-controller.js';

router.post('/login', loginUser);
router.post('/registration', registrateUser);


export default router