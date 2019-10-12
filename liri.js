
require('dotenv').config();

// set up variables to require node dependencies
var Keys = require('./keys.js');
var Moment = require('./node_modules/moment');
var Axios = require('./node_modules/axios');
var Spotify = require('./node_modules/node-spotify-api');


var spotify = new Spotify(Keys.spotify);


// concatenate argv args into a searchable string
var args = process.argv;
var searchArr = [];
var searchStr = '';

for (var i = 3; i < args.length; i++) {

    searchArr.push(process.argv[i]);

}

searchStr = searchArr.join('+');




// third arg in argv arguments
var input = process.argv[2];

switch (input) {
    case 'concert-this':
        // do something
        console.log('You chose concert-this');
        console.log('-------------Sapmple Output--------------')


        Axios.get('https://rest.bandsintown.com/artists/' + searchStr + '/events?app_id=codingbootcamp')
            .then(function(response) {
                console.log(response.data);

            }).catch(function(error) {
                if (error) {
                    console.log(error);
                }
            })

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




