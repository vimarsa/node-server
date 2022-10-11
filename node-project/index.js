const express  = require ('express');
const hbs  = require ('express-handlebars');

const path = require('path'); //does not need to be installed (to locate files)
const app = express(); //this will run express for us 

//local files required
const API = require ('./lib/api'); //the file location of the ... file

app.use(express.static(path.join(__dirname, 'public'))); //make public the file directory

app.engine('.hbs', hbs.engine({
    defaultLayout: 'layout', //we need a layouts folder but a layout.hbs file
    extname: 'hbs'
}));

app.set('view engine', '.hbs');

// get - retrieve a page for me and put it in this filepath
app.get('/', async(req,res) => {
    let data = await API.data;
    console.log(data); // a check to see if the data has returned at all?
    console.log("Hello"); //we dont have to reload the website all the time now, just save this file
    res.render('index', {data}); //response renders index, data in api.js
})

app.get('/about', async(req,res) => {
    res.render('about'); //response renders index
})

app.listen(3000, () =>  {
    console.log('App is listening on port 3000. Well done.');
})

