import express from 'express';
import { cveRouter } from './routes/cves.routes.js';
import { logger } from './utils/logger.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';

const app = express();
const port = 3000;

app.use(express.json());

// if adding more middleware, this should remain last
app.use(errorHandlerMiddleware);

app.listen(port, () => 
{
    logger.info(`Example app listening at http://localhost:${port}`);
});