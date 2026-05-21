import { CvesService } from '../services/cves.service.js';
import { logger } from '../utils/logger.js';

export class CvesController {
  static getCves = (req, res, next) => {
   logger.debug('CvesController : getCves()');
    
    const result = CvesService.getCves();
    res.status(200).json(result);
  };

  // getCveById
  static getCveById = (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : getCveById(${id})`);

    const result = CvesService.getCveById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  };

  // createCve
  static createCve = (req, res) => {
   logger.debug('CvesController : createCve()');

    const result = CvesService.createCve(req.body);
    res.status(201).json(result);
  }

  // replaceCve
  static replaceCve = (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : replaceCve(${id})`);

    const result = CvesService.replaceCve(id, req.body);
    res.status(200).json(result);
  }

  // updateCve
  static updateCve = (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : updateCve(${id})`);

    const result = CvesService.updateCve(id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  // deleteCve
  static deleteCve = (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : deleteCve(${id})`);

    const result = CvesService.deleteCve(id);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.sendStatus(204);
  }
}