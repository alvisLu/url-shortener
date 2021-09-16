import UrlModel, { ShortUrl } from '../models/url';

export interface UrlQuery {
  getUrl(attributes: ShortUrl): Promise<ShortUrl | null>;
  createUrl(full: string): Promise<ShortUrl>;
}

export default class UrsService implements UrlQuery {
  public async getUrl(attributes: ShortUrl): Promise<ShortUrl | null> {
    return await UrlModel.findOne(attributes).exec();
  }

  public async createUrl(full: string): Promise<ShortUrl> {
    return await UrlModel.create({ full });
  }
}
