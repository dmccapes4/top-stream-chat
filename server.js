import express from 'express'
import favicon from 'serve-favicon'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from './webpack.config.dev'

const compiler = webpack(config)
const port = 3000;
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.listen(port, function (error) {
    if(error) {
        console.log(error)
    } else {
        open(`http://localhost:${port}`)
    }
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'))
});

