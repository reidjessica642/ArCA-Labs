import { logger } from '../utils/logger.js';

let CVES = [ //TODO: create actual uuids for mock data
  {
    id: '1',
    name: 'CVE-2026-24216',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-24216',
    vulnType: [
      'Arbitrary Code Execution',
      'Data Tampering',
      'Denial of Service'
    ],
    risk: 'High',
    color: 'Red'
  },
  {
    id: '2',
    name: 'CVE-2026-6960',
    url: 'https://app.opencve.io/cve/CVE-2026-6960',
    vulnType: [
      'Remote Code Execution'
    ],
    risk: 'Critical',
    color: 'Red'
  },
  {
    id: '3',
    name: 'CVE-2026-45232',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-45232',
    vulnType: [
      'Man In The Middle',
      'Denial of Service'
    ],
    risk: 'Low',
    color: 'Green'
  }
];

export class CvesRepository {
  static getCves = () => {
   logger.debug('CvesRepository: getCves()');

    return CVES;
  }

  // getCveById
  static getCveById = (id) => {
   logger.debug(`CvesRepository: getCveById(${id})`);

    return CVES.find(c => c.id === id);
  }

  // createCve
  static createCve = (newCve) => {
   logger.debug(`CvesRepository: createCve()`);

    CVES.push(newCve);
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