const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'development') {    // if in development 
  console.log("here is development");
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));

} else if (process.env.NODE_ENV === 'production') {
  console.log("here is production");                              // if in production
  app.use(express.static('dist')); // this line over here opens up the dist directory (allow access to it)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  // app.get tells the server to send index.html file for any get request to any route on our server
  // this line is specifically used for compatibility with react router more precisely with browserHistory module (it makes sure browserHistory library works correctly)
}

app.listen(process.env.PORT || 3050, () => console.log('Listening')); // server providers will usually give you a specific port to use which you can easily access (process.env.PORT) 

