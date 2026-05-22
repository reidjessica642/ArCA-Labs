import express from 'express';
import { CvesController } from '../controllers/cves.controller.js';
import { colorHandler } from '../middleware/colorHandler.middleware.js';

export const cveRouter = express.Router();

cveRouter.get('/', CvesController.getCves);
cveRouter.get('/:id', CvesController.getCveById);
cveRouter.post('/', colorHandler, CvesController.createCve);
cveRouter.put('/:id', colorHandler, CvesController.replaceCve);
cveRouter.patch('/:id', colorHandler, CvesController.updateCve);
cveRouter.delete('/:id', CvesController.deleteCve);