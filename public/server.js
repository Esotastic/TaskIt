/**
 * Import express by requiring it
 * set express function to app to use
 *  its functionality
 */

const express = require('express');
const app = express();


//test if node is working
console.log('Node is working..');


//test if express is working
//have express(app) listen on port 3000
app.listen(3000,function(){
console.log('listening on 3000');
});

//request object and response object
app.get('/',(req, res) => {
    res.send('Hello from response!');
    res.sendFile(__dirname + './index.html');
});

