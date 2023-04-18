const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const options = {origin:'*', credentials: true, optionSuccessStatus:200};
const port = 4000;


const databaseinit = require('./config/dbconfig.js')
const maincontroller = require('./controllers/maincontroller.js')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors(options));


app.get('/', maincontroller.homeget)


databaseinit().then(()=> app.listen(port, ()=> 
{
    console.log(`Server is up and running on port ${port}`)
}))




