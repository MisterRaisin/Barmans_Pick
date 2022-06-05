const express=  require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// App Settings
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(expressLayouts);

// Layout settings
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes for the app
const routes = require('./server/routes/cocktailRoutes.js');
app.use('/', routes);

// Connect to port
app.listen(port, () => console.log(`Listening to port ${port}`));