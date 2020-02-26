const mongodb = require('mongodb')
const { isEmpty } = require('../utils/validators')

exports.create = (req, res) => {
  const { description } = req.body

  if (isEmpty(description)) {
    return
  }

  req.app.locals.collection.insertOne(
    {
      description,
    },
  ).then((items) => {
    const item = items.ops[0]

    res.render('partials/todo-item', { item }, (error, html) => {
      if (error) throw error

      res.send(html)
    })
  }).catch((error) => {
    /* eslint-disable no-console */
    console.log(error)
    /* eslint-enable no-console */
  })
}

exports.read = (req, res) => {
  req.app.locals.collection.find().toArray((error, items) => {
    if (error) throw error

    res.render('index', { items })
  })
}

exports.update = (req, res) => {
  const { description } = req.body
  const id = req.body._id

  if (isEmpty(description)) {
    return
  }

  req.app.locals.collection.updateOne(
    {
      _id: new mongodb.ObjectID(id),
    },
    {
      $set: {
        description,
      },
    },
  ).then(() => {
    res.send(description)
  }).catch((error) => {
    /* eslint-disable no-console */
    console.log(error)
    /* eslint-enable no-console */
  })
}

exports.delete = (req, res) => {
  const id = req.body._id

  req.app.locals.collection.deleteOne(
    {
      _id: new mongodb.ObjectID(id),
    },
  ).then(() => {
    res.end()
  }).catch((error) => {
    /* eslint-disable no-console */
    console.log(error)
    /* eslint-enable no-console */
  })
}
