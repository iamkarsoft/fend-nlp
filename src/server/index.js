let path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// const formInput = document.querySelector("#name");



// using dotenv to mask api key
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY
const baseUrl = 'https://api.meaningcloud.com/lang-4.0/identification'



// instantiating app
const app = express()

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
const cors = require('cors')

app.use(cors())



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

app.post('/text',function(req,res){
        return res.send(req.body)
        textApiCall(baseUrl,apiKey,formInput)
});

const textApiCall = async(url,apiKey,text)=>{

    const response = await fetch(`${url}`,{
        method: 'POST',
        key: apiKey,
        txt: text,
    });

    try{

        const result = await response.json;
        console.log(result);
        return result;

    }catch(error){
        console.log(`error fetching results! ${error}`);
    }
}