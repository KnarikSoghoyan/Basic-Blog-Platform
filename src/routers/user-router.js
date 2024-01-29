import { Router } from 'express';
const router = Router();

import { login, registration } from '../controllers/user-controller.js';

router.post('/login', login);
router.post('/registration', registration);


export default router