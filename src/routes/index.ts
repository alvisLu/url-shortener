import { Response, Request, Router } from 'express';

const router = Router();

router.get('/health', async (req: Request, res: Response) => {
  res.send('ok');
});

export default router;
