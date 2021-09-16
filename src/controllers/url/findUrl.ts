import { Response, Request, NextFunction } from 'express';
import UrlService from '../../lib/mongoose/queries/url';
import _ from 'lodash';

const urlService = new UrlService();

export async function findUrl(req: Request, res: Response, next: NextFunction) {
  try {
    const { hash } = req.params;
    const url = await urlService.getUrl({ short: hash });
    if (_.isEmpty(url)) {
      return res.status(404).send({ message: `not found url` });
    }
    res.send({ data: url });
  } catch (err) {
    next(err);
  }
}
