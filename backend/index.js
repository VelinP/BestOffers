const express = require('express');
const cors = require('cors');
const app = express();
const options = {origin:'*', credentials: true, optionSuccessStatus:200};
const port = 4000;
const databaseinit = require('./config/dbconfig.js');
const maincontroller = require('./controllers/maincontroller.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors(options));


app.get('/', maincontroller.homeget);
app.get('/profile/:useremail', maincontroller.profilegetcards)
app.get('/logout', maincontroller.getLogout)
app.get('/alloffers', maincontroller.getAllCards)
app.get('/offers/:id/details', maincontroller.getDetails)
app.get('/offers/:id/details/delete' , maincontroller.getDel)

app.post('/register', maincontroller.registerpost);
app.post('/login', maincontroller.loginpost);
app.post('/create', maincontroller.createpost);

app.put('/profile/:useremail/edit', maincontroller.putEdit)

databaseinit().then(()=> app.listen(port, ()=> {console.log(`Server is up and running on port ${port}`)}));




