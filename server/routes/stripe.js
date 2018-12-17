import { Stripe } from 'stripe';
import * as express from 'express';

import { STRIPE_SECRET_KEY } from 'config';
import { authCheck } from 'middlewares';

const router = express.Router({ mergeParams: true });
const stripe = Stripe(STRIPE_SECRET_KEY);

router.post('/', authCheck, async (req, res) => {
  const { id: tokenId } = req.body;

  const charge = await stripe.charges.create({
    amount: 500,
    currency: 'usd',
    source: tokenId,
  });

  req.user.credits += 5;
  const user = await req.user.save();

  res.send(user);
});

export default router;
