import { Router } from 'express';

import exampleRouter from './example';

const router = Router();

router.use('/example', exampleRouter);

export default router;
