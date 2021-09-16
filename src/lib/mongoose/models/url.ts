import mongoose from 'mongoose';
import shortId from 'shortid';

export interface ShortUrl {
  full?: string;
  short?: string;
}

const ShortUrlSchema = new mongoose.Schema(
  {
    full: {
      type: String,
      required: true,
      unique: true,
    },
    short: {
      type: String,
      required: true,
      default: shortId.generate,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ShortUrlModel = mongoose.model<ShortUrl & mongoose.Document>(
  'ShortUrl',
  ShortUrlSchema
);

export default ShortUrlModel;
