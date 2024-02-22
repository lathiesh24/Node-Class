const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const demo = require("./routes/demoRoute");
const userRoute = require('./routes/userRoute');

const app = express();
const port = process.env.PORT || 1247; // Use PORT environment variable or default to 1247

const dbURI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://lathieshakshitha:lathieshakshitha@akdemo.todv195.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
    
app.use(express.json());

app.use('/auth',userRoute);
