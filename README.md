# web

!!!! Watch for babel6 support https://github.com/gaearon/babel-plugin-react-transform
+++++++++ redbox-react
using this temporary
https://github.com/justingreenberg/react-transform-boilerplate
!!!! Check how to use things like
"env": {
  "development"
} 
in babel configs

new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
in webpack

NODE_ENV=production in package.json

eslint in webpack???
http://survivejs.com/webpack_react/linting_in_webpack/


https://blog.risingstack.com/using-react-with-webpack-tutorial/
http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/

main idea https://github.com/gaearon/react-transform-boilerplate
browser-sync https://github.com/BrowserSync/recipes/tree/master/recipes/webpack.react-transform-hmr
inside webpack https://github.com/Va1/browser-sync-webpack-plugin
watch http://webpack.github.io/docs/tutorials/getting-started/#watch-mode

some great ideas here https://github.com/kriasoft/react-starter-kit
    new webpack.optimize.OccurenceOrderPlugin(),
Especially here which tells that probably webpack is insideout of browser-sync

Another complete example?
https://github.com/christianalfoni/webpack-express-boilerplate

Run webpack and produce files in build dir (html,css)
make webpack serve js on its own middleware

https://christianalfoni.github.io/react-webpack-cookbook/index.html

cerabral url-mapper promise to board an idea of marked tree of state
https://github.com/cerebral/url-mapper

https://github.com/erikras/react-redux-universal-hot-example
and links there to
https://github.com/erikras/react-redux-universal-hot-example/blob/master/docs/InlineStyles.md
