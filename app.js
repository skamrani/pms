const express = require('express');
const session = require('express-session');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fs = require('fs');

//Loading configured modules
const appConfig = require('./config/app');
const passport = require('./config/passport');
const Sequelize = require('./config/sequelize');

//Loading middlewares
const response = require("./middlewares/response");
const validator = require("./middlewares/validator");

//Initialize express
const app = express();

app.use(function (req, res, next) {
    //allowing ng app to call this server
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("'Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.use(expressValidator());
app.use(response);

app.use(session({
    secret: 'centricsource',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, httpOnly: false}
}));

app.use(passport.initialize());
app.use(passport.session());

//Loading all controllers found in controller's directory
var controllers = fs.readdirSync(appConfig.dirControllers);
for (var i in controllers) {
    //get file
    let conrtollerFileName = controllers[i];
    let arrFileName = conrtollerFileName.split('.');
    //Getting the first word as base route (e.g user.controller => user)
    let baseRoute = arrFileName.shift();
    let controller = require(appConfig.dirControllers + conrtollerFileName)(Sequelize, passport);
    console.log('Loading Controller : ', conrtollerFileName, '|', 'Base Route : ', baseRoute);
    //assignin validation middleware to router
    app.use('/' + baseRoute, validator[baseRoute]);
    app.use(validator.validationResult);
    //loading controllers as app routes
    app.use('/' + baseRoute, controller);
}

app.get('/test', (req, res) => {
    res.sendJSON({name: 'zubair'}, null, 401);
});

// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
//// error handler
//app.use(function (err, req, res, next) {
//    // set locals, only providing error in development
//    res.locals.message = err.message;
//    res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//    // render the error page
//    res.status(err.status || 500);
//    res.render('error.hbs');
//});

module.exports = app;

//var http = require('http');
//var port = '3000';
//app.set('port', port);
//var server = http.createServer(app);
//server.listen(port, () => {
//    console.log('listening');
//});