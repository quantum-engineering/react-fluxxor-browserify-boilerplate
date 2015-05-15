# Fun with Fluxxor (Web Version)

Fun experiments with the [Fluxxor](http://fluxxor.com/) library with **Browserify**
and a node server

**Authors:** Gregory T. & Max Lin

## Requirements:

1. Node/iojs
2. any basic server, we recommend `https-server` (`npm install -g http-server`)

## How to run it on your local machine (without dummy node server)

1. run `npm install`
2. run watch task `npm run build-js`
3. run `http-server` (the default port is 8080, you can change it using the `-p` argument)

## How to run it on your local machine with a the node server

1. run `npm install`
2. run build task for development `npm run build-js`
3. make sure you're not running an http-server
4. run `node app.js` on the project root directory (currently set to 7777, you can change it in the `config.json` file)

for development you can use `npm run watch-js` to watch client file changes


**Notes:**

Please note that we're using ES6 (babel), please refer to this documentation for reference: [babel](http://babeljs.io/docs/learn-es6/)
