//web server
const http = require('http');
//al crear recive un call back con solicitud y respuesta
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
            // res.write('Hola mundo');
        let salida = {
            nombre: 'Maxito',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida))
        res.end() // fin de la respuesta sino se queda el loop
    })
    .listen(8080); //puerto dle servidro que esta escuchando

console.log('escuchando el puerto 8080');