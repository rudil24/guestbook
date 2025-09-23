import { Router } from 'express';
import { getAllEntries, createEntry } from '../controllers/entries.controller.js';

const router = Router();

// Define routes for the /entries resource
router.get('/', getAllEntries);
router.post('/', createEntry);

export default router;