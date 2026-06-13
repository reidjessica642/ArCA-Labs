import { logger } from '../utils/logger.js';
import { database } from '../utils/database.js';
import { Constants } from '../utils/constants.js';

let CVES = [
  {
    id: 'bac705c6-dbcb-4512-ad71-ee0dd765b7c7',
    name: 'CVE-2026-24216',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-24216',
    tags: [
      'Arbitrary Code Execution',
      'Data Tampering',
      'Denial of Service'
    ],
    risk: 'High',
    color: 'Red'
  },
  {
    id: 'd27005c0-6d7b-40a8-bd2b-7799cdd78138',
    name: 'CVE-2026-6960',
    url: 'https://app.opencve.io/cve/CVE-2026-6960',
    tags: [
      'Remote Code Execution'
    ],
    risk: 'Critical',
    color: 'Red'
  },
  {
    id: '973bab5d-d9a2-484d-a728-0aeb5024f5c9',
    name: 'CVE-2026-45232',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-45232',
    tags: [
      'Man In The Middle',
      'Denial of Service'
    ],
    risk: 'Low',
    color: 'Green'
  }
];

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
   logger.debug(`CvesRepository: createCve()`);

    await database.db.collection('cves').insertOne(newCve);
    delete newCve._id;
    return newCve;
  }

  // replaceCve
  static replaceCve = (id, replaceCve) => {
   logger.debug(`CvesRepository: replaceCve()`);

    CVES = CVES.filter(c => c.id !== id);
    CVES.push(replaceCve);
    
    return replaceCve;
  }

  // updateCve
  static updateCve = (id, updateCve) => {
   logger.debug(`CvesRepository: updateCve()`);

    const cve = CVES.find(c => c.id === id);

    if (!cve) {
      return null;
    }

    Object.keys(updateCve).forEach((prop) => {
      cve[prop] = updateCve[prop];
    });

    
    return cve;
  }

  // deleteCve
  static deleteCve = (id) => {
   logger.debug(`CvesRepository: deleteCve()`);

    const originalSize = CVES.length;
    CVES = CVES.filter(c => c.id !== id);
    
    if (originalSize === CVES.length) {
      return false;
    }
    return true;
  }
}