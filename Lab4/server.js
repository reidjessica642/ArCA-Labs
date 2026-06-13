import express from 'express';
import { cveRouter } from './routes/cves.routes.js';
import { logger } from './utils/logger.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';
import { database } from './utils/database.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1/cves', cveRouter);

// if adding more middleware, this should remain last
app.use(errorHandlerMiddleware);

const config = 
{
    appName: 'CvesAPI',
    database: 'arca',
    url: 'mongodb://127.0.0.1:27017',
    minPoolSize: 2,
    maxPoolSize: 10
};

await database.setup(config);

app.listen(port, () => 
{
    logger.info(`Example app listening at http://localhost:${port}`);
});