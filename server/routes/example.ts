import { Router, Request, Response } from 'express';

const exampleRouter = Router();

exampleRouter.get('/hello', async (req: Request, res: Response) => {
  try {
    const response = { message: 'hello' };
    res.status(200).send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default exampleRouter;
