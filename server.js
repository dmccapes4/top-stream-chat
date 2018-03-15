// NodeJS web framework
import express from 'express'

// Module for working with file and directory paths
import path from 'path'

// Open a file or URL in the user's preferred application
import open from 'open'

// Module bundler used to bundle JavaScript files for browser
import webpack from 'webpack'

// File that sets the parameters for the webpack to bundle
import config from './webpack.config.dev'

//Middleware:
// Serving a favicon
import favicon from 'serve-favicon'

// Parse incoming request bodies
import bodyParser from 'body-parser'

// HTTP request logger
import logger from 'morgan'


// Configure the webpack as compiler
const compiler = webpack(config)

// Define a port for the app
const port = 3000;

// Set up the express app
const app = express();

// Set the favicon for the app
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Log requests to console
app.use(logger('dev'))

// Parse incoming requests from data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Install webpack dev middleware to allow hot reloading
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

// Start the server and open the user's preferred application
app.listen(port, function (error) {
    if(error) {
        console.log(error)
    } else {
        open(`http://localhost:${port}`)
    }
});

// GET route of root path calls index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'))
});

module.exports = app