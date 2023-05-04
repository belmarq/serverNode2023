const http = require('http');

http.createServer((request, response)=>{
    //console.log(request);
    const persona = {
        id:1,
        nombre:'Luis'
    }
    response.setHeader('Content-Disposition',
        'attachment; filename=lista.csv');
    response.writeHead(200, {'Content-Type':'application/csv'});
    response.write('id,nombre\n');
    response.write('1,Jose\n');
    response.write('2,Luis\n');
    response.write('3,Maria\n');
    response.write('4,Elena\n');
    response.write('5,Mirna\n');
    response.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080);