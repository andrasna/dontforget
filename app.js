const express = require('express')

const app = express()

const { MongoClient } = require('mongodb')

const todoController = require('./controllers/todoController')

const port = process.env.PORT || 3000
const url = 'mongodb://localhost:27017'
const dbName = 'dontforget'
const collectionName = 'todos'
const isDevMode = (process.env.NODE_ENV === 'development')
app.locals.isDevMode = isDevMode

if (isDevMode === true) {
  const webpack = require('webpack')

  const webpackDevMiddleware = require('webpack-dev-middleware')

  const webpackHotMiddleware = require('webpack-hot-middleware')

  const webpackConfig = require('./webpack.dev')

  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }))

  app.use(webpackHotMiddleware(compiler))
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false,
}))

app.post('/', todoController.create)
app.get('/', todoController.read)
app.put('/', todoController.update)
app.delete('/', todoController.delete)

MongoClient.connect(url, { useUnifiedTopology: true }).then((client) => {
  const db = client.db(dbName)
  const collection = db.collection(collectionName)
  app.locals.collection = collection

  /* eslint-disable no-console */
  app.listen(port, () => console.log(`App listening on port ${port}!`))
}).catch((error) => console.error(error))
