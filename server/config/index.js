import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export const {
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  MONGO_DB_URI,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY,
} = process.env;
