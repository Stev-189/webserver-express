const hbs = require('hbs');

//helpers es una funcion que se dispara cunado template lo requiere nombrehelpers y funcion
hbs.registerHelper('getAnio', () => new Date().getFullYear())
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // Paslabras Toidas
    })
    return palabras.join(' ');
})