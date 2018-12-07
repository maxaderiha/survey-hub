const proxy = require('http-proxy-middleware');

const filter = (pathname, req) => pathname.match(/^\/api/);

module.exports = function(app) {
  app.use(
    proxy(filter, { target: 'http://localhost:5000' })
  );
};
