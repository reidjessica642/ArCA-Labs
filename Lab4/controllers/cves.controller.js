import { CvesService } from '../services/chickens.service.js';
import { logger } from '../utils/logger.js';

export class CvesController {
  static getChickens = (req, res, next) => {
   logger.debug('CvesController : getChickens()');
    
    const result = CvesService.getChickens();
    res.status(200).json(result);
  };

  // getChickenById
  static getChickenById = (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : getChickenById(${id})`);

    const result = CvesService.getChickenById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  };

  // createChicken
  static createChicken = (req, res) => {
   logger.debug('CvesController : createChicken()');

    const result = CvesService.createChicken(req.body);
    res.status(201).json(result);
  }

  // replaceChicken
  static replaceChicken = (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : replaceChicken(${id})`);

    const result = CvesService.replaceChicken(id, req.body);
    res.status(200).json(result);
  }

  // updateChicken
  static updateChicken = (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : updateChicken(${id})`);

    const result = CvesService.updateChicken(id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  // deleteChicken
  static deleteChicken = (req, res) => {
    const id = req.params.id;
   logger.debug(`CvesController : deleteChicken(${id})`);

    const result = CvesService.deleteChicken(id);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.sendStatus(204);
  }
}