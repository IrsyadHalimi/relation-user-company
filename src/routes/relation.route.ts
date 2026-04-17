import { Router } from 'express';
import { getRelations } from '../controllers/relation.controller';

const router = Router();

router.get('/user-company', getRelations);

export default router;