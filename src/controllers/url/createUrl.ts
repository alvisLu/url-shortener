import { Response, Request, NextFunction } from 'express';
import UrlService from '../../lib/mongoose/queries/url';
import { validURL } from '../../lib/utils/stringUtil';

const urlService = new UrlService();

export async function createUrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const fullUrl = req.body.url;

    if (!validURL(fullUrl)) {
      return res.status(404).send({ message: `invalid url: ${fullUrl}` });
    }

    let url = await urlService.getUrl({ full: fullUrl });
    if (!url) {
      url = await urlService.createUrl(fullUrl);
    }

    res.send({ short: url.short });
  } catch (err) {
    next(err);
  }
}
