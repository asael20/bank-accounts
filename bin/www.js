const config = require('config');
const app = require('../app');

let port = process.env.PORT || 3000;


// server listening on port defined
app.listen(port)
    .on('listening', onListening)
    .on('error', onError)



//--------------------------------------------
function onListening() {
    console.log(`server is running on port ${port}`);
}

function onError(someError){
    console.log(someError)
}