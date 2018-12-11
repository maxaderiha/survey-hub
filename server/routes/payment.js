import { Stripe } from 'stripe';

import { STRIPE_SECRET_KEY } from 'config';
import { authCheck } from 'middlewares/authCheck';

const stripe = Stripe(STRIPE_SECRET_KEY);

export default app => {
  app.post('/api/stripe', authCheck, async (req, res) => {
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
};
