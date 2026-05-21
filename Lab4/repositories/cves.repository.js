import { logger } from '../utils/logger.js';

let CHICKENS = [ //TODO: edit to match
  {
    id: '1',
    name: 'Mack',
    breed: 'White Leghorn',
    weight: 1.5
  },
  {
    id: '2',
    name: 'EVOO',
    breed: 'Rhode Island Red',
    weight: 1.75
  },
  {
    id: '3',
    name: 'Mango',
    breed: 'Speckled Sussex',
    weight: 2.2
  },
  {
    id: '4',
    name: 'Bagel',
    breed: 'Black Star',
    weight: 2.6
  }
];

export class CvesRepository {
  static getChickens = () => {
   logger.debug('CvesRepository: getCves()');

    return CHICKENS;
  }

  // getCveById
  static getCveById = (id) => {
   logger.debug(`CvesRepository: getCveById(${id})`);

    return CHICKENS.find(c => c.id === id);
  }

  // createCve
  static createCve = (newCve) => {
   logger.debug(`CvesRepository: createCve()`);

    CHICKENS.push(newCve);
    return newCve;
  }

  // replaceCve
  static replaceCve = (id, replaceCve) => {
   logger.debug(`CvesRepository: replaceCve()`);

    CHICKENS = CHICKENS.filter(c => c.id !== id);
    CHICKENS.push(replaceCve);
    
    return replaceCve;
  }

  // updateCve
  static updateCve = (id, updateCve) => {
   logger.debug(`CvesRepository: updateCve()`);

    const chicken = CHICKENS.find(c => c.id === id);

    if (!chicken) {
      return null;
    }

    Object.keys(updateCve).forEach((prop) => {
      chicken[prop] = updateCve[prop];
    });

    
    return chicken;
  }

  // deleteCve
  static deleteCve = (id) => {
   logger.debug(`CvesRepository: deleteCve()`);

    const originalSize = CHICKENS.length;
    CHICKENS = CHICKENS.filter(c => c.id !== id);
    
    if (originalSize === CHICKENS.length) {
      return false;
    }
    return true;
  }
}