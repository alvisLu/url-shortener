import convict from 'convict';
import 'dotenv/config';

const config = convict({
  env: {
    format: ['development', 'production'],
    default: 'development',
    env: 'NODE_ENV',
  },
  appName: {
    default: '',
    env: 'APP_NAME',
  },
});

config.validate({ allowed: 'strict' });
export default config;
