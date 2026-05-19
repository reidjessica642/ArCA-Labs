import { logger } from '../utils/logger.js';

let CHICKENS = [
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
   logger.debug('CvesRepository: getChickens()');

    return CHICKENS;
  }

  // getChickenById
  static getChickenById = (id) => {
   logger.debug(`CvesRepository: getChickenById(${id})`);

    return CHICKENS.find(c => c.id === id);
  }

  // createChicken
  static createChicken = (newChicken) => {
   logger.debug(`CvesRepository: createChicken()`);

    CHICKENS.push(newChicken);
    return newChicken;
  }

  // replaceChicken
  static replaceChicken = (id, replaceChicken) => {
   logger.debug(`CvesRepository: replaceChicken()`);

    CHICKENS = CHICKENS.filter(c => c.id !== id);
    CHICKENS.push(replaceChicken);
    
    return replaceChicken;
  }

  // updateChicken
  static updateChicken = (id, updateChicken) => {
   logger.debug(`CvesRepository: updateChicken()`);

    const chicken = CHICKENS.find(c => c.id === id);

    if (!chicken) {
      return null;
    }

    Object.keys(updateChicken).forEach((prop) => {
      chicken[prop] = updateChicken[prop];
    });

    
    return chicken;
  }

  // deleteChicken
  static deleteChicken = (id) => {
   logger.debug(`CvesRepository: deleteChicken()`);

    const originalSize = CHICKENS.length;
    CHICKENS = CHICKENS.filter(c => c.id !== id);
    
    if (originalSize === CHICKENS.length) {
      return false;
    }
    return true;
  }
}