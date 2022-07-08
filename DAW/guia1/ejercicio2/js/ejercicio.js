function init() {
var op1 = prompt('Introduzca el primer numero:','');
var pies = 3.28084;
var pulgada = 39.3701;
var yarda = 1.09361;

var conversiones = document.getElementById('conversiones');

var resultado = document.getElementById('resultado');
var contenido = "<header>\n";
contenido += "\t<h1></h1>\n";
contenido += "</header>\n";
contenido += "<nav class='menu'>\n";
contenido += "<ul>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
contenido += "</li>\n";
contenido += "\t<li>\n";
contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
contenido += "</li>\n";
contenido += "</ul>\n";
contenido += "</nav>\n";
//Colocar el contenido dentro del elemento div
conversiones.innerHTML = contenido;
//Preparando el manejo del evento click sobre los enlaces del menú
var opciones = document.getElementsByTagName('a');
//Recorrer todos los elementos de enlace (elementos a)
//y asignar el manejador del evento click
for(var i=0; i<opciones.length; i++){
switch(i){
case 0:
//Función sumar
opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " metros es "  +
" = " + (op1 * pies) + " pies" + "</p>\n";
}
break;
case 1:
opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " metros es " +
" = " + (op1 * pulgada) + " pulgadas" + "</p>\n";
}
break;
case 2:
opciones[i].onclick = function(){
resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " metros es " +
" = " + (op1 * yarda) + " yardas" + "</p>\n";
}
break;

}
}
}
window.onload = init;