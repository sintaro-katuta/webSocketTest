var server = require('ws').Server;
var s = new server({port:5000});

s.on('connection',function(ws){
    ws.on('message',(message) => {
        const json = JSON.parse(message);
        console.log("Received: " + json);
        s.clients.forEach((client) => {
            if(client.readyState === ws.OPEN){
                client.send(json);
            }
        });
    });

    ws.on('close',function(){
        console.log('I lost a client');
    });

});
