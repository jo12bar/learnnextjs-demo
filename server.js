const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev,
  conf: {
    webpack(config) {
      config.externals = config.externals || {};
      config.externals['styletron-server'] = 'styletron-server';
      return config;
    }
  }
});

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }

      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
