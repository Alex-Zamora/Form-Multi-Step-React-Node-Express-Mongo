const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// DB Connect
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/propeties/', require('./controllers/propeties'));

// Static files
console.log(path.join(__dirname, ''));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});