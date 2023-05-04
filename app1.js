require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
//https://railway.app/
const app = express();
const port = process.env.PORT;
//handlebars
//npm i hbs
//hbs requiere una carpeta de nombre views
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');



app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Home page');
});

app.get('/prueba', function (req, res) {
    const cdx = {
        'nombre':'Luis',
        'apellido':'Beltran'
    }
    res.render('prueba', cdx);
});

app.get('/holamundo', function (req, res) {
    res.send('Hello World');
});

app.get('*', function (req, res) {
    //res.send('404 | página not found, Página predeterminada para avisar que es una ruta indeterminada');
    res.sendFile(__dirname +'/public/404.html');
});

app.listen(port, () =>{
    console.log(`escuchando el puerto ${port}`);
});


