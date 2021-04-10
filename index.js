const express = require('express');
const app = express();
const fs = require('fs');

var server = app.listen(3000, function () {
    //Codigo que se ejecuta cada vez que se levanta el server
    console.log('Servidor ejecutandose correctamente');
})

//Cuando no encuentre archivos estaticos los va a buscar en la ruta que le diga
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    //Codigo que se ejecuta cada vez que se accese a '/'
    res.sendFile(__dirname + '/index.html');
})

//Gestiono las direcciones dinamicas que llegan desde index.html
app.get('/:category/:sub_category', function (req, res) {

    let filteredElements = [];

    //Filtrar los elementos desde el json con todos los elementos segun la subcategoria elegida
    //Require para un archivo JSON ya lo trae en formato de objeto
    let data = require('./json/elements.json');

    data.elements.forEach(element => {

        console.log(req.params.category);
        console.log(req.params.sub_category);


        if (element[req.params.category] == req.params.sub_category) {

            filteredElements.push(element);
            console.log("match");

        }

    });

    //Generar dinamicamente la pagina con los resultados deseados
    console.log(filteredElements);
})