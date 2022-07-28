var matriz = ['Carlos', ' Pepe', ' Jose ' ];

document.write("<div>");

document.write('<h2> Uso de push()</h2>');

document.write('<h4>Arreglo normal: '+ matriz + '</h4>');

document.write('<h4> Ahora utilizamos la funcion push(" Roberto")</h4>');

document.write("<h4>Lo que nos devuelve: "+ matriz.push('Roberto') + " como la nueva longitud y el arreglo queda asi " + matriz + "</h4>");

document.write('<h2> Uso de pop()</h2>');

document.write('<h4>Arreglo normal: '+ matriz + '</h4>');

document.write('<h4> Ahora utilizamos la funcion matriz.pop()</h4>');

document.write('<h4>Nos muestra que opcion se eliminara que seria: ' + matriz.pop() + ', por lo cual el arreglo termina asi ' + matriz +  '</h4>');

document.write("</div>");