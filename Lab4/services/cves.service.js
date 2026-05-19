import { v4 as uuid } from 'uuid';
import { CvesRepository } from '../repositories/cves.repository.js';
import { logger } from '../utils/logger.js';

export class CvesService {
  static getChickens = () => {
   logger.debug('CvesService: getChickens()');
    return CvesRepository.getChickens();
  }

  // getChickenById
  static getChickenById = (id) => {
   logger.debug(`CvesService: getChickenById(${id})`);
    return CvesRepository.getChickenById(id);
  }

  // createChicken
  static createChicken = (newChicken) => {
   logger.debug(`CvesService: createChicken()`);

    newChicken.id = uuid();
    return CvesRepository.createChicken(newChicken);
  }

  // replaceChicken
  static replaceChicken = (id, replaceChicken) => {
   logger.debug(`CvesService: replaceChicken()`);

    replaceChicken.id = id;
    return CvesRepository.replaceChicken(id, replaceChicken);
  }

  // updateChicken
  static updateChicken = (id, updateChicken) => {
   logger.debug(`CvesService: updateChicken()`);

    updateChicken.id = id;
    return CvesRepository.updateChicken(id, updateChicken);
  }

  // deleteChicken
  static deleteChicken = (id) => {
   logger.debug(`CvesService: deleteChicken()`);

    return CvesRepository.deleteChicken(id);
  }
}