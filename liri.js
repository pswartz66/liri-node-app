
require('dotenv').config();

// set up variables to require node dependencies
var Keys = require('./keys.js');
var moment = require('./node_modules/moment');
var Axios = require('./node_modules/axios');
var Spotify = require('./node_modules/node-spotify-api');


var spotify = new Spotify(Keys.spotify);

var arrayStateCodes = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL',
    'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
    'MD', 'MA', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']


var stateCode = '';



// concatenate argv args into a searchable string
var args = process.argv;
var searchArr = [];
var searchStr = '';

var i = 3;
for (var i; i < args.length; i++) {

    if (arrayStateCodes.includes(process.argv[i].toUpperCase())) {

        stateCode = process.argv[i].toUpperCase();

        // console.log(stateCode.toUpperCase());

        break;

    } else {

        searchArr.push(process.argv[i]);

    }

}

searchStr = searchArr.join('+');
// console.log(searchStr);




// third arg in argv arguments
var input = process.argv[2];

switch (input) {
    case 'concert-this':
        // call bands in town http request function

        bandsInTown();


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

function bandsInTown() {

    Axios.get('https://rest.bandsintown.com/artists/' + searchStr + '/events?app_id=codingbootcamp')
        .then(function (response) {

            var Information = response.data[0];

            for (var i = 0; i < response.data.length; i++) {

                if (response.data[i].hasOwnProperty('venue')) {

                    console.log('yes');
                    var venueName = Information.venue.name;
                    var VenueLocation = Information.venue.city + ' ' + Information.venue.region;

                    var venueDate = new Date(Information.datetime);
                    var venueDateConverted = venueDate.toLocaleString();

                    console.log('\n');
                    console.log('-------------------------------------------------');
                    console.log(' Artist: ' + searchStr.split('+').join(' ').toUpperCase());
                    console.log('-------------------------------------------------');
                    console.log('  Venue: ' + venueName + ' in ' + VenueLocation);
                    console.log('  Date: ' + venueDateConverted);
                    console.log('\n');

                    break;
                }
            }


        }).catch(function (error) {
            if (error) {
                console.log(error);
            }
        })

}


