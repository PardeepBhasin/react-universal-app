import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';
import { Helmet } from 'react-helmet';
import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );

  const helmet = Helmet.renderStatic();

  const html = `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <script src="client_bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = undefined;</script>
      </head>
      <body>
        <div id="root" class="container">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
