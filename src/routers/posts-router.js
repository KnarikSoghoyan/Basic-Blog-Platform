import { Router } from 'express';
const router = Router();

import { createPost} from '../controllers/post-controller.js';

router.post('/', createPost);
// router.get('/:email?', readUser);
// router.put('/', updateUser);
// router.delete('/:email', deleteUser);

export default router