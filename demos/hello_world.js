var Hapi = require('hapi');

// create a new instance of hapi server
var ser = new Hapi.Server();

// port 3000, and I will be using localhost
// when running I will connect via http://localhost:3000
ser.connection({ port: 3000, host: 'localhost' });


// just one route for now
ser.route({
    method: 'GET',
    path: '/',
    handler: function (req, res) {

        res('hapi! hapi! hapi!...joy! joy! joy!');
    }
});


// start the server
ser.start(function(){

    console.log(`hapi server up: ${ser.info.uri}`);

});