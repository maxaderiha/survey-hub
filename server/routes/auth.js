import passport from 'passport';

export default app => {
  app.get(
    '/api/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
  app.get(
    '/api/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => res.redirect('/surveys')
  );

  app.get('/api/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // for testing
  app.get('/api/user', (req, res) => {
    res.send(req.user);
  });
};
