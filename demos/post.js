var Hapi = require('hapi');

// create a new instance of hapi server
var server = new Hapi.Server();

// port 3000, and I will be using localhost
// when running I will connect via http://localhost:3000
server.connection({
    port : 3000,
    host : 'localhost'
});

/*
// set a route
server.route({
    method : 'GET',
    path : '/',
    handler : function (request, reply) {

        reply('post request hapi demo. (use the console)');

    }
});
*/

// set a route
server.route({
    method : 'POST',
    path : '/',
    handler : function (request, reply) {

        console.log('post request!');

        reply('Yes this is mr horse.');

    }
});

// start the server
server.start(function () {

    console.log('hapi server up: ');

});

// post it function
/*
var postIt = function (data, url, beforeSend, done, fail) {
 
    var xhr = new XMLHttpRequest();
 
    url = url || 'http://localhost:3000';
    data = data || {};
    beforeSend = beforeSend || function(xhr,next){
       next();
    },
    done = done || function (xhr) {
        console.log(xhr);
    };
    fail = fail || function (xhr) {
        console.log(xhr);
    };
 
    xhr.open('post', url);
 
    xhr.onreadystatechange = function () {
 
        if (this.readyState === 4) {
 
            if (this.status === 200) {
 
                done(this);
 
            } else {
 
                fail(this);
 
            }
 
        }
 
    };
 
    beforeSend(xhr, function(){
 
        xhr.send(data);
 
    });
 
};
*/
