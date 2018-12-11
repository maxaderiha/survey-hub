export function authCheck(req, res, next) {
  if (req.user) {
    return next();
  }

  return res.status(401).send({
    message: 'Not Authenticated',
  });
}
