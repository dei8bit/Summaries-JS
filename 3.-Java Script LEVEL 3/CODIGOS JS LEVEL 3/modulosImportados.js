//# IMPORT:
//+Permite importar modulos JS:

//. Importacion de elementos individuales:
//+ Permite importar elementos individualmente en una sola línea.
// import {numero} from "./modulosExportados.js";
// console.log(numero);
// import {texto} from "./modulosExportados.js";
// console.log(texto);
// import {arregloFrutas} from "./modulosExportados.js";
// console.log(arregloFrutas);
// import {objetoPersona} from "./modulosExportados.js";
// console.log(objetoPersona);
// import {funcion} from "./modulosExportados.js";
// console.log(funcion);
// import {humano} from "./modulosExportados.js";
// console.log(humano);


//. Importacion renombrada:
//+ Permite importar variables renombradas. 

// import {numero as numeraso} from "./modulosExportados.js";
// console.log(numeraso);
// import {texto as textaso} from "./modulosExportados.js";
// console.log(textaso);
// import {arregloFrutas as arreglaso} from "./modulosExportados.js";
// console.log(arreglaso);
// import {objetoPersona as objetaso} from "./modulosExportados.js";
// console.log(objetaso);
// import {funcion as funcionasa} from "./modulosExportados.js";
// console.log(funcionasa);
// import {humano as humanaso} from "./modulosExportados.js";
// console.log(humanaso);

// import {numero as n,texto as t,arregloFrutas as a ,objetoPersona as o,funcion as f,humano as h} from "./modulosExportados.js";
// console.log(n);
// console.log(t);
// console.log(a);
// console.log(o);
// console.log(f);
// console.log(h);


//. Importacion multiple:
//+ Permite importar varias variables en una línea. 

// import {numero,texto,arregloFrutas,objetoPersona,funcion,humano} from "./modulosExportados.js";
// console.log(numero);
// console.log(texto);
// console.log(arregloFrutas);
// console.log(objetoPersona);
// console.log(funcion);
// console.log(humano);


//. Importacion por default:
//+ Permite importar  elementos por default.

//* NO! usa llaves la importacion por default.

// import  loquesea from "./modulosExportados.js"; ///El nombre del modulo aqui puede ser cualquiera.
// console.log(loquesea);

//. Importacion general :
//+ Permite exportar  todo el contenido de un archivo en un objeto.

//* ES! necesario agregarle un alias.

// import  * as aliasPiola from "./modulosExportados.js";
// console.log(aliasPiola);

// console.log(aliasPiola.numero);
// console.log(aliasPiola.texto);
// console.log(aliasPiola.arregloFrutas);
// console.log(aliasPiola.objetoPersona);
// console.log(aliasPiola.funcion);
// console.log(aliasPiola.humano);

//. Importacion total :
//+ Permite importar todo un archivo JS sin usar la palabra reservada export.

//* Pero no se pueden referenciar los elementos.

// import "./modulosExportados.js";


//. Importaciones dinamicas: 
//+ Permite importar elementos haciendo uso de condicionales e interpolación.
                                              //*FALTA EN EL RESUMEN*


                                              /// mostrar lo que contienene a y como ejecutar las variables!!
//$   Opción 1: Se carga functions.js si se cumple la condición
// const number = 44;

//   if (number > 42) {
//   import("./modulosExportados.js")
//     .then(a => console.log(a));
// }
// else{console.log("numero menor");}


//$ Opción 2: Se carga functions.js interpolando la constante
// const filename1 = "modulosExportados";
// import(`./${filename1}.js`).then(a => console.log(a.funcion()));
// const filename2 = "modulosExportados.js";
// import(`./${filename2}`).then(a => console.log(a.funcion()));
// const filename3 = "./modulosExportados.js";
// import(`${filename3}`).then(a => console.log(a.funcion()));

//$ Opción 3: Se carga aditional.js sólo si el usuario hace click en el botón

// const button = document.querySelector("button.bot");
// button.addEventListener("click", () => import("./modulosExportados.js"));

// function a(){
//   import("./modulosExportados.js");
//   (console.log(numero));
// }

// const button = document.querySelector("button.bot");
// button.addEventListener("click", () => a());



//. Importacion remotas:
//+ Permite importar modulos desde URL externas

// import { ceil } from "URL";

