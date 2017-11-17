'use strict';

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
// const robots = require('robots.txt');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use('/', express.static(path.join(__dirname, '/../../dist')));

// Logger
app.use(morgan('dev'));

// Pass in the absolute path to your robots.txt file
// app.use(robots(__dirname + '/robots.txt'));

// Set Quote Route
const testimonials = require('./testimonials');
app.use('/testimonials', testimonials);
// Set Quote Route
const quote = require('./quote');
app.use('/quote', quote);

// Catch all other routes and return the index file aka handled by Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Sunny Pets is running on localhost:${port}`));

module.exports = app;
