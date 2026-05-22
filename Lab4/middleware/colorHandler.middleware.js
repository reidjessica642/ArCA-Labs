import { logger } from '../utils/logger.js';

export const colorHandler = (req, res, next) => {
    logger.info('colorHandler invoked');

    if (!req.body.color) {
        logger.warn('colorHandler: no color property, calling next()');
        next();
        return;
    }

    logger.info(`colorHandler: req.body.color = ${req.body.color}`);

    // validation
    if (typeof req.body.color !== 'string') {
        res.status(400).json({
            error: 'color property must be a string',
        });
        return;
    }

    const colorMap = {
        red: '#ff0000',
        green: '#00ff00',
        blue: '#0000ff'
    };

    const inputColor = req.body.color.toLowerCase();

    if (colorMap[inputColor]) {
        req.body.hexColor = colorMap[inputColor];
    } else {
        logger.warn(`colorHandler: unsupported color '${req.body.color}'`);
        res.status(400).json({
            error: `color '${req.body.color}' is not supported - please use red, green, or blue`
        });
        return;
    }

    logger.info(`colorHandler: labeled cve with color ${req.body.color} as hexColor = ${req.body.hexColor}`);
    next();
    return;
}