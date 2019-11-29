const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const users = require('./routes/api/users');
// Initialise Express App
const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Configuration
const db = require('./config/keys').localMongoURI;

// Connect to MongoDB Options
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	dbName: 'molsalon'
	// useCreateIndex: true,
	// useFindAndModify: false,
	// autoIndex: false, // Don't build indexes
	// reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
	// reconnectInterval: 500, // Reconnect every 500ms
	// poolSize: 10, // Maintain up to 10 socket connections
	// // If not connected, return errors immediately rather than waiting for reconnect
	// bufferMaxEntries: 0,
	// connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
	// socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
	// family: 4 // Use IPv4, skip trying IPv6
};

mongoose
	.connect(db, options)
	.then(() => console.log('MongoDB Connected'))
	.catch(error => console.log(error));

app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
