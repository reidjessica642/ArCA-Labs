import { CvesService } from '../services/cves.service.js';
import { logger } from '../utils/logger.js';

export class CvesController {
  static getCves = async (req, res, next) => {
   logger.debug('CvesController : getCves()');
    
    const result = await CvesService.getCves();
    res.status(200).json(result);
  };

  // getCveById
  static getCveById = async (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : getCveById(${id})`);

    const result = await CvesService.getCveById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  };

  // createCve
  static createCve = async (req, res) => {
   logger.debug('CvesController : createCve()');

    const result = await CvesService.createCve(req.body);
    res.status(201).json(result);
  }

  // replaceCve
  static replaceCve = async (req, res) => {
    const id = req.params.id;
    logger.debug(`CvesController : replaceCve(${id})`);

    const result = await CvesService.replaceCve(id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  // updateCve
  static updateCve = async (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : updateCve(${id})`);

    const result = await CvesService.updateCve(id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  // deleteCve
  static deleteCve = async (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : deleteCve(${id})`);

    const result = await CvesService.deleteCve(id);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.sendStatus(204);
  }
}