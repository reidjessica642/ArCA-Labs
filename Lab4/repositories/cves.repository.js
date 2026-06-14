import { logger } from '../utils/logger.js';
import { database } from '../utils/database.js';
import { Constants } from '../utils/constants.js';

export class CvesRepository {
  static getCves = async () => {
    logger.debug('CvesRepository: getCves()');

    return database.db.collection('cves').find({}, {
      projection: {
        _id: 0
      }
    }).toArray();
  }

  // getCveById
  static getCveById = (id) => {
    logger.debug(`CvesRepository: getCveById(${id})`);

    return database.db.collection('cves').findOne({ id }, {
      projection: {
        _id: 0
      }
    });
  }

  // createCve
  static createCve = async (newCve) => {
    logger.debug('CvesRepository: createCve()');

    await database.db.collection('cves').insertOne(newCve);
    delete newCve._id;
    return newCve;
  }

  // replaceCve
  static replaceCve = async (id, replaceCve) => {
    logger.debug('CvesRepository: replaceCve()');

    const result = await database.db.collection(Constants.CVES_COLLECTION).replaceOne({
      id,
    }, replaceCve);

    if (result.matchedCount === 0) {
      return false;
    }

    return replaceCve;
  }

  // updateCve
  static updateCve = async (id, updateCve) => {
    logger.debug('CvesRepository: updateCve()');

    const updateStatement = {
      $set: {},
    };

    Object.keys(updateCve).forEach((key) => {
      updateStatement.$set[key] = updateCve[key]; //name: updateCve.name
    });

    const result = await database.db.collection(Constants.CVES_COLLECTION).findOneAndUpdate({
      id,
    },
      updateStatement,
      {
        returnDocument: 'after',
      }
    );

    if (result) {
      delete result._id;
    }

    return result;
  }

  // deleteCve
  static deleteCve = async (id) => {
    logger.debug('CvesRepository: deleteCve()');

    const result = await database.db.collection(Constants.CVES_COLLECTION).deleteOne({
      id, //id: id
    });

    return result.deletedCount === 0 ? false : true;
  }
}