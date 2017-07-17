const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')

const app = express()
const router = express.Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/animalshelter', {
  useMongoClient: true
})

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'))

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: 'views/partials'
}))
app.set('view engine', 'handlebars')

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

const port = process.env.PORT || 3000
app.listen(port, function(req, res) {
  console.log('Express is running on port ' + port)
})
