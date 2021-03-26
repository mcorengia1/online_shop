const { json } = require('express');
const fs = require('fs');
const { parse } = require('path');

var categories = fs.readFile('../json/categories.json', function(error) {
    if (error) {
        console.log(error);
        throw ('Error de lectura del archivo de categorias, existe el archivo?')
    } else {
        console.log('Lectura correcta');
        console.log(JSON.parse(categories));
    }
});