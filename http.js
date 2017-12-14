var http = require('http');

// OPCIONES
// var opciones = {
//     port: 80,
//     hostname: "google.com",
//     method: "get",
//     path: "http://google.com"
// }

// var req = http.request(opciones, (respuesta) =>{
//     // LA RESPUESTA ES UN CANAL DE LECTURA
//     respuesta.on('data', (chunk) =>{
//         console.log(chunk.toString());
//     });
//     respuesta.on('end', () => {
//         console.log(respuesta.headers);
//     });
// });
// req.end();
// console.log("Peticion lanzada");

// ===================================== HTTPS
var https = require('https');

var opciones2 = {
    port: 443,
    hostname: "google.com",
    method: "get",
    path: "https://www.google.com.gt/"
}

var req2 = https.request(opciones2, (respuesta) => {
    respuesta.on('data', (chunk) => {
        console.log(chunk.toString());
    });
    respuesta.on('end', () => {
        console.log(respuesta.headers);
    });
});
req2.end();
console.log("Peticion lanzada");