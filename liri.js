
require('dotenv').config();

// set up variables to require node dependencies
var Keys = require('./keys.js');
var Moment = require('./node_modules/moment');
var Axios = require('./node_modules/axios');
var Spotify = require('./node_modules/node-spotify-api');


var spotify = new Spotify(Keys.spotify);

var input = process.argv[2];

switch (input) {
    case 'concert-this':
        // do something
        console.log('You chose concert-this');
        break;

    case 'spotify-this-song':
        // do something
        console.log('You chose spotify-this-song');

        break;

    case 'movie-this':
        // do something
        console.log('You chose movie-this');

        break;
    
    case 'do-what-it-says':
        // do something 
        console.log('You chose do-what-it-says');

        break;
    
}

/* var args = process.argv;
// use something like this if you wanted 
// to run mutliple commands at the same time
for (var i = 2; i < args.length; i++) {

    switch(input) {
        case 'concert-this':
            console.log('You selected concert-this');

    }

} */
