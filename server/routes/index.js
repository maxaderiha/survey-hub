import * as express from 'express';
import authRoutes from './auth';
import stripeRoutes from './stripe';
import surveysRoutes from './surveys';
import userRoutes from './user';

const router = express.Router({ mergeParams: true });

router.use('/auth', authRoutes);
router.use('/stripe', stripeRoutes);
router.use('/surveys', surveysRoutes);
router.use('/user', userRoutes);

router.get('*', (req, res) => {
  return res.status(404).json({
    message: '404: Page not found',
  });
});

export default router;
