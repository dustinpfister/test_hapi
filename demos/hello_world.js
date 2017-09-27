var Hapi = require('hapi');

// create a new instance of hapi server
var server = new Hapi.Server();

// port 3000, and I will be using localhost
// when running I will connect via http://localhost:3000
server.connection({ port: 3000, host: 'localhost' });


// just one route for now
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        reply('hapi! hapi! hapi!...joy! joy! joy!');
    }
});


// start the server
server.start(function(){

    console.log('hapi server up!');

});