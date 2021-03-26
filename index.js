const express = require('express');
const app = express();

var server = app.listen(3000, function(){
    //Codigo que se ejecuta cada vez que se levanta el server
    console.log('Servidor ejecutandose correctamente');
})

//Cuando no encuentre archivos estaticos los va a buscar en la ruta que le diga
app.use(express.static(__dirname));

app.get('/',  function(req, res){
    //Codigo que se ejecuta cada vez que se accese a '/'
    res.sendFile( __dirname + '/index.html');
})

