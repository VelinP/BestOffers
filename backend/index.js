const express = require('express');
const cors = require('cors');
const app = express();
const options = {origin:'*', credentials: true, optionSuccessStatus:200};
const port = 4000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));


const databaseinit = require('./config/dbconfig.js')
const maincontroller = require('./controllers/maincontroller.js')


app.use(cors(options));


app.get('/', maincontroller.homeget)
app.post('/register', maincontroller.registerpost)
app.post('/login', maincontroller.loginpost)
app.post('/create', maincontroller.createpost)


databaseinit().then(()=> app.listen(port, ()=> {console.log(`Server is up and running on port ${port}`)}))




