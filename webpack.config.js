var path = require('path');
var SRC_DIR = path.join(__dirname, '/react/src');
var DIST_DIR = path.join(__dirname, '/react/dist');
module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      filename: 'brb',
      path: DIST_DIR
    },
    module: {
        loaders: [
          {
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    };