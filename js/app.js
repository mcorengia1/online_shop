"use strict";

/*

Este modulo es el encargado de leer las categorias y cargarlas en la web index.html

*/

fetch('/json/categories.json')
    .then(response => response.json())
    .then(data => loadCategories(data));
//Obtengo los datos desde el archivo JSON, lo convierto a objeto
//Luego lo uso para crear los objetos en el HTML

//Cargo las categorias en index.html
function loadCategories(categories) {
    categories.categories.forEach(category => {
        //En el JSON en la primer propiedad pongo las categorias que va a tener guardadas
        //Luego defino la propiedad de cada categoria cada una con un array de valores

        let categoriesDiv = document.createElement('div');
        let categoriesName = document.createElement('p');
        let productsSearch = document.getElementById('products_search');
        let categoriesCount;
        //Creo los elementos por cada categoria principal

        categoriesName.innerHTML = category;
        categoriesDiv.className = 'categories';
        //Asigno los valores a la categoria principal y su respectiva clase

        productsSearch.appendChild(categoriesName);
        productsSearch.appendChild(categoriesDiv);
        //Creo los elementos html

        categoriesCount = productsSearch.children.length;
        //Guardo la cantidad de elementos que tiene la capa de busqueda
        //Para poder agregar las subcategorias siempre en la ultima capa añadida

        console.log(categoriesCount);

        for (let index in categories[category]) {

            let categoryDiv = document.createElement('div');
            let categoryA = document.createElement('a');
            let subCategoriesCount;

            categoryDiv.className = 'category';
            categoryA.href = '/' + category + '/' + categories[category][index];
            categoryA.text = categories[category][index];

            productsSearch.children[categoriesCount - 1].appendChild(categoryDiv);
            //Obtengo la ultima categoria y ahi le agrego la subcategoria

            productsSearch.children[categoriesCount - 1].children[index].appendChild(categoryA);
            //En orden accedo a la ultima categoria, luego a la subCategoria actual y ahi inserto el link

        }

    });

}