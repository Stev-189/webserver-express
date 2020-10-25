const express = require('express')
const app = express()
const hbs = require('hbs'); // para usare parciales
require('./hbs/helpers'); //requiere la funciones helpers

//para usar con heroku
const port = process.env.PORT || 3000;

//middleware es un call back que seimpre se ejecutar sin importra la url que la persona pida
// recive un callback
// en este caso es un folder stattico en este caos el public
app.use(express.static(__dirname + '/public')); //__dirname es comom d ecir culquier path y concatena 


//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); // uso de template html

// //helpers es una funcion que se dispara cunado template lo requiere nombrehelpers y funcion
// hbs.registerHelper('getAnio', () => new Date().getFullYear())
// hbs.registerHelper('capitalizar', (texto) => {
//     let palabras = texto.split(' ');
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // Paslabras Toidas
//     })
//     return palabras.join(' ');
// })

// app.get('/', (req, res) => { // hace esto a puerto 3000/
//     // res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Maxito',
//         edad: 32,
//         url: req.url
//     }
//     res.send(salida)
// })

app.get('/', (req, res) => {
    res.render('home', { // enviamos variables y sus vbalores
        nombre: 'maxito',
        // anio: new Date().getFullYear()
    }); //son critos los ;
})

app.get('/about', (req, res) => {
    res.render('about', { // enviamos variables y sus vbalores
        // anio: new Date().getFullYear()
    }); //son critos los ;
})

app.get('/data', (req, res) => { // hace distinto que link anterior
    res.send('Hola Mundo data')
})

//tambien recive un callback
// app.listen(3000, () => {
// console.log('Escuchando peticiones en el puerto 3000'); // esto se eejcuta cunado se levanta server
// })

//heroku
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`); // esto se eejcuta cunado se levanta server
})

//heroku
///////////////////////////////////////
//Important node FH 071
//en package.json colocar en los scripts
//"start":"node server.js",
///////////////////////////////////////