import cookieSession from 'cookie-session';

import { COOKIE_KEY } from 'config';

export default cookieSession({
  maxAge: 10 * 24 * 60 * 60 * 1000,
  keys: [COOKIE_KEY],
});
