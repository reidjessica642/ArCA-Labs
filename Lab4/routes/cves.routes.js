import express from 'express';
import { CvesController } from '../controllers/cves.controller.js';

export const cveRouter = express.Router();

cveRouter.get('/', CvesController.getCves);
cveRouter.get('/:id', CvesController.getCveById);
cveRouter.post('/', CvesController.createCve);
cveRouter.put('/:id', CvesController.replaceCve);
cveRouter.patch('/:id', CvesController.updateCve);
cveRouter.delete('/:id', CvesController.deleteCve);