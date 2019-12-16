import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from 'config';

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  const user = await User.findById(userId);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id: googleId, emails } = profile;
        let user = await User.findOne({ googleId });

        if (!user) {
          user = await new User({
            googleId,
            emails: emails.map(email => ({ value: email.value })),
          }).save();
        }

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
