'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = progress.env.PORT || 3000;

app.use(express.static('.public'));

//return the data locata in the geo.json file
// app.get('/location', (request, response) => {
//     try{
//         let locationData = require('./data/geo.json');
//         console.log(locationData);

//         response.send();

//     } catch(error){
//         console.log('There was an error!');
//         response.status(500).send('Server down');
//     }
  
// });


//Advise what port we are listening to
app.listen(PORT, () => console.log('Listening on port ${PORT}'));