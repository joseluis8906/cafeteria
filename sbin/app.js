const express = require('express')
const app = express();

//session
var session = require('express-session');
app.use(session({ secret: 'G91K5 92KF8 P30D5 BY2MA', resave: false, saveUninitialized: true, cookie: {}}));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//apps
var session_route = require('./routes/session');
app.use ('/session', session_route);

var gcontrol = require('./routes/gcontrol');
app.use ('/gcontrol', gcontrol);

var guser = require('./routes/guser');
app.use ('/guser', guser);



// statics
app.use (express.static('share'));
app.use ('/bin', express.static('bin'));
app.use ('/boot', express.static('boot'));
app.use ('/lib', express.static('lib'));

// home
app.get('/', function (req, res)
{
    res.send('Cafeteria')
});

//server conf
app.listen(3000, function () {
  console.log('Cafeteria app listening on port 3000!')
});
