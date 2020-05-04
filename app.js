let fs = require('fs');
let moment = require('moment');
let axios = require('axios');

let http = require('http')

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': "text/plain"});

    switch (req.url) {
        case '/':
            res.end('Bienvenido');
            break;
        case '/nodejs':
            res.end('Ahora si se esta poniendo lindo..... nodejs');
            break;
        case '/lola':
            res.end('Hola soy lola la rolinga');
            break;
        case '/productos':
            res.end('Estos son todos nuestros productos');
            break;
        case '/contacto':
            res.end('juanespinel@gmail.com');
            break;
        default:
            res.end('En construccion')
            break;
    }
    

}).listen(3030, 'localhost');

let autos = require('./autos')

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

/*
console.log(datos);
console.log(moment().format('DD / MM / YYYY'));
console.log(autos[2]);
console.log(`Mi auto principal es un ${autos[0].marca} ${autos[0].modelo} color ${autos[0].color} año ${autos[0].ano}`);
console.log(`Mi auto secundario es un ${autos[1].marca} ${autos[1].modelo} color ${autos[1].color} año ${autos[1].ano}`);
*/