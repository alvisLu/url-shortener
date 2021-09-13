import { Stream, createLogger, stdSerializers } from 'bunyan';
import config from './config';

const defaultStreams: Array<Stream> = [
  {
    level: 'debug' || 'info',
    stream: process.stdout,
  },
  {
    level: 'error',
    stream: process.stderr,
  },
];

function logger() {
  return createLogger({
    name: config.get('appName'),
    serializers: stdSerializers,
    streams: defaultStreams,
  });
}

export default logger();
