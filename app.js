const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const nutrition_logRouter = require('./routes/Nutrition_log');
const physical_activitiesRouter = require('./routes/physical_activities');



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
app.use('/nutritionLog', nutrition_logRouter);
// app.use('/physicalActivities', physical_activitiesRouter);


module.exports = app;
