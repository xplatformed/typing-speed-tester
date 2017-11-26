const express = require('express');

// set equal to return result form calling express s a function
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

// Binds the app to a port on our machine
app.listen(port, ()=> {
    console.log(`Typing speed testing Server is up on port ${3000}`);
});

