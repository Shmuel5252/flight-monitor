import { Router } from 'express';
import { saveFlight } from '../controllers/flightController';
import validateFlight from '../middleware/validateFlight';

const router = Router();

router.post('/', validateFlight, saveFlight);

export default router;