import mongoose from 'mongoose';
import logger from '../logger';
logger.child({ file: 'lib/mongoose' });

const MONGO_URI = `mongodb://localhost:27017/url-shorten`;

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (err) {
    setTimeout(connectDB, 3000);
  }
};

mongoose.connection.on('connected', () => {
  logger.info('Mongoose default connection established');
});

mongoose.connection.on('error', err => {
  logger.error({ err }, 'Mongoose default connection error');
});

mongoose.connection.on('disconnected', () => {
  logger.info('Mongoose default connection disconnected');
});

export default mongoose;
