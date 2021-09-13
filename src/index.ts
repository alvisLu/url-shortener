import app from './app';
import config from './lib/config';
import logger from './lib/logger';
logger.child({ file: 'app' });

const PORT = 8080;
const NODE_ENV = config.get('env');

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}, ${NODE_ENV}`);
});
