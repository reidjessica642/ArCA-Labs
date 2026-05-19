import express from 'express';
import { CvesController } from '../controllers/cves.controller.js';

export const cveRouter = express.Router();

chickenRouter.get('/', CvesController.getChickens);
chickenRouter.get('/:id', CvesController.getChickenById);
chickenRouter.post('/', CvesController.createChicken);
chickenRouter.put('/:id', CvesController.replaceChicken);
chickenRouter.patch('/:id', CvesController.updateChicken);
chickenRouter.delete('/:id', CvesController.deleteChicken);