let path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const cors = require('cors')
const bodyParser = require('body-parser');
let result = {};
// const formInput = document.querySelector("#name");



// using dotenv to mask api key
const dotenv = require('dotenv');
dotenv.config();





// instantiating app
const app = express()

/* Dependencies */

/* Middleware*/
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

app.use(cors())


    const apiKey = process.env.API_KEY
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1'

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// endpoint to test api

app.post('/text', async function(req,res){

        
      await  textApiCall(baseUrl,apiKey,req.body.inputText);
        res.send(result);

});

const textApiCall = async(url,apiKey,text)=>{
    const response = await fetch(`${url}?key=${apiKey}&txt=${text}&lang=en`,{
        method: 'POST',
    });

    try{

         result = await response.json();
        return result;

    }catch(error){
        console.log(`error fetching results! ${error}`);
    }
}