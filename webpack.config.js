const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
      },
    
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
  };
   
  // webpack akan menghasilkan: ./dist/app.js, ./dist/search.js