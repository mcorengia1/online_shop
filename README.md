# Online shop proyect

### Objetivos

El objetivo de este proyecto es combinar los lenguajes de programacion Css, HTML5, Javascript y Node.js.

### Tecnologias utilizadas

El index fué desarrollado enteramente con HTML5, Css y javascript. En cuanto al backend está realizado con Node.js y el framework express, particularmente la pagina que se genera al buscar items de forma dinamica se genera mediante un archivo formato .pug

### Funcionamiento

En el index se crea una lista con las categorias guardadas en el archivo categories.json con sus respectivas subcategorias. Al momento de hacer click en alguna de estas categorias se redirecciona a una ruta con el nombre de la categoria y de la subcategoria.

En el backend al momento de recibir una ruta con una categoria y una subcategoria se lee desde el archivo elements.json para tomar todos los elementos que coincidan con dicha subcategoria, guardarlos en un array y enviarlos a un archivio .pug para su renderizado. En el caso de no encontrar elementos que coincidan se informa por pantalla.

### Mejoras futuras

La implementacion de las categorias y los elementos en archivos .json no es lo mas practico para estar agregando o quitando elementos, por esto a futuro me gustaría implementarlo con bases de datos.
