export function creditsCheck(req, res, next) {
  const { credits } = req.user;

  if (credits > 0) {
    return next();
  }

  return res.status(403).send({
    message: 'Operation not allowed. Not enough credits.',
  });
}
