'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.static('.public'));
app.use(cors());

function Stuff (request, data){
    this.searchQuery = request;
    this.formatedQuery = data.results[0].formatted_address;
    this.latatude = data.results[0].geometry.location.lat;
    this.longitude = data.results[0].geometry.location.lng;
}





//return the data locata in the geo.json file
app.get('/location', (request, response) => {
    try{
        let locationData = require('./data/geo.json');
        // request = 'lynnwood';
        

        let newStuff = new Stuff(request,locationData);

        response.send(newStuff);

    } catch(error){
        console.log('There was an error!');
        response.status(500).send('Server down');
    }
  
});


//Advise what port we are listening to
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
