var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('public'));

// Start the server
app.listen(PORT, function(err) {
    // Check if we have an error, if we do - reporrt it
    if (err) {
        console.error('There was a problem starting the server:', err);
    }
    else {
        // The server started successfully
        console.log('Server is listening on port', PORT);
    }
});
