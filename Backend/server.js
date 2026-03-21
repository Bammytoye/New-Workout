const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./Routes/Workout');
const userRoutes = require('./Routes/user');
const mongoose = require('mongoose');
const cors = require('cors');

const { setServers } = require("node:dns/promises");
setServers(["1.1.1.1", "8.8.8.8"]); // Google DNS


// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5174',
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/Workout', workoutRoutes); 
app.use('/api/user', userRoutes); 

// Connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // Running for Request
        app.listen(process.env.PORT, () => {
            console.log('Connecting to Db & Running on Port 5010!');
        });
        
    })
    .catch((error) => {
        console.log(error, 'Error connecting to db');
    });
