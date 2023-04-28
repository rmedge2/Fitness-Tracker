const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const nutrition_logsRouter = require('./routes/Nutrition_log');
const physical_activityRouter = require('./routes/physicial_log');



const app = express();

// const Sequelize = require('sequelize');
// const { User } = require('./models');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/Nutrition_log', nutrition_logsRouter);
// app.use('/Physical_Activities', Physical_ActivitiesRouter);


module.exports = app;
