
var numero = [];
numero = prompt("Digite un número entero");
var par, impar , sumpar = 0, sumimp = 0, sumall = 0, min;
var cont = 0, cont2 = 0, cont3= 0, i, j , k;

document.write("<h1>Cantidad de cifras: "+ numero.length +"</h1>");

for (i=0;i<numero.length;i++){ 
    
    par = numero[i];

    if(par % 2 == 0){
        cont ++;
    }
}
document.write("<h1>Cantidad de cifras pares: "+ cont +"</h1>");

for (i=0;i<numero.length;i++){
    
    impar = numero[i];

    if(impar % 2 == 1){
        cont2 ++;
    }
}

document.write("<h1>Cantidad de cifras impares: "+ cont2 +"</h1>");

for (i=0;i<numero.length;i++){ 
    
    par = numero[i];

    if(par % 2 == 0){
        sumpar = parseInt(par) + sumpar;
    }
}

document.write("<h1>La suma de cifras pares es: "+ sumpar+"</h1>");

for (i=0;i<numero.length;i++){ 
    
    impar = numero[i];

    if(impar % 2 == 1){
        sumimp = parseInt(impar) + sumimp;
    }
}

document.write("<h1>La suma de cifras impares es: "+ sumimp+"</h1>");

for (i=0;i<numero.length;i++){ 
    
    sumall = parseInt(sumall) + parseInt(numero[i]);

    
}

document.write("<h1>La suma de todos las cifras es: "+ sumall +"</h1>");

min = numero[0];

for(i=0; i<=numero.length; i++){
    if(min>numero[i]){
        min=numero[i];
    }
}

document.write("<h1>La menor cifra es: "+ min +"</h1>");




