import { Response, Request, NextFunction, Router } from 'express';
import url from '../controllers/url';
import logger from '../lib/logger';
import { findUrl } from '../controllers/url/findUrl';

const router = Router();
logger.child({ file: 'router' });

router.use((req: Request, _res: Response, next: NextFunction) => {
  logger.info(
    { query: req.query, params: req.params, body: req.body },
    `[${req.method}] ${req.path}`
  );
  next();
});

router.get('/health', async (_req: Request, res: Response) => {
  res.send('ok');
});

router.get('/:hash', findUrl);
router.use('/shorten', url);

// 404 handler
router.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'not found' });
});

export default router;
