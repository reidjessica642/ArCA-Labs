import { v4 as uuid } from 'uuid';
import { CvesRepository } from '../repositories/cves.repository.js';
import { logger } from '../utils/logger.js';
import { database } from '../utils/database.js';

export class CvesService {
  static getCves = () => {
   logger.debug('CvesService: getCves()');
    return CvesRepository.getCves();
  }

  // getCveById
  static getCveById = (id) => {
   logger.debug(`CvesService: getCveById(${id})`);
    return CvesRepository.getCveById(id);
  }

  // createCve
  static createCve = (newCve) => {
   logger.debug('CvesService: createCve()');

    newCve.id = uuid();
    return CvesRepository.createCve(newCve);
  }

  // replaceCve
  static replaceCve = (id, replaceCve) => {
   logger.debug('CvesService: replaceCve()');

    replaceCve.id = id;
    return CvesRepository.replaceCve(id, replaceCve);
  }

  // updateCve
  static updateCve = (id, updateCve) => {
   logger.debug('CvesService: updateCve()');

    updateCve.id = id;
    return CvesRepository.updateCve(id, updateCve);
  }

  // deleteCve
  static deleteCve = (id) => {
   logger.debug('CvesService: deleteCve()');

    return CvesRepository.deleteCve(id);
  }
}