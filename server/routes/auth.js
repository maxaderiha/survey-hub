import passport from 'passport';

export default app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // for testing
  app.get('/api/user', (req, res) => {
    res.send(req.user);
  });
};