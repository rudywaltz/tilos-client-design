import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import https from 'https';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

function proxy(req, response, next) {
  if (req.method === 'GET' && req.url.startsWith('/api/')) {
    https
      .get(`https://tilos.hu${req.url}`, function callback(res) {
        let data = '';

        res.on('data', function (chunk) {
          data += chunk;
        });

        res.on('end', function () {
          response.end(data);
        });
      })
      .on('socket', function (socket) {
        socket.emit('agentRemove');
      });
  } else {
    next();
  }
}

polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    proxy,
    sapper.middleware({
      session: function () {
        return {
          development: dev,
        };
      },
    })
  )
  .listen(PORT, function (err) {
    if (err) console.log('error', err);
  });
