const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Initialise Express App
const app = express();

// Connect Database
connectDB();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Body Middleware
app.use(express.json({ extended: false }));

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/services', require('./routes/api/services'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
