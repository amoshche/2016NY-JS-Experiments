process.env.BABEL_CACHE_PATH = __dirname + '/.babel-cache.json';
require('babel-register')({
  presets: [
    'es2015'
  ],
  sourceMaps:true
});
require(__dirname + '/devServer.js');