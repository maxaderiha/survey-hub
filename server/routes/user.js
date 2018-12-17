import * as express from 'express';

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.send(req.user);
});

export default router;
