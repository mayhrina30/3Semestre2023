miFuncion(8,2);//esto se lo conose como hosting

function miFuncion(a, b){
    //console.log("Sumamos:"+ (a + b)); Sumamos; 10, Sumamos; 9
    return a + b;
}
//llamamos ala funcion
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

// DECLARAMOS UNA FUNCION DE TIPO EXPRESION

let x = function(a ,b){ return a + b}; //nesesita cierre de punto y coma
resultado = x(5 , 6); // al llamarla se pone la variable y parentesis
console.log(resultado);


//Funcio de tipo self y invoking
(function(a, b){
    console.log('Ejecutando laa funcion :' + (a + b));

})(9,6);

console.log(typeof miFuncion);
function miFuncionDos(a,b){
    console.log(arguments.length);

    
}
miFuncion(5,7 ,3 ,8 );


//tostring
var miFuncionTexto = miFuncionDos.toString(); // convierte funcion a texto
console.log(miFuncionTexto)

//FUNCION FLECHA no ase falta la palabra return

const sumarFuncionFlecha = (a,b ) => a + b;
resultado = sumarFuncionFlecha(3 ,7); // Asignamos el valor a una variable
console.log(resultado)

let sumar = function(a = 4, b = 8){
    console.log(arguments[0]); // muestra el parametro de a :
    console.log(arguments[1]); //muestra el parametro de : b 
   
   return a + b + arguments[2];;

}
resultado = sumar(3, 2, 9);
console.log(resultado);

let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma +=arguments[i]; // arguments es para arreglo

    }
    return suma;
}

// Tipos primitivos
let k = 10;
function cambiarValor(a){ //paso por valor
    a = 20;

}
cambiarValor(k);
console.log(k)

const persona = {
    nombre : 'Juan',
    apellido: 'lopez'
}
console.log(persona);
function cambiarValorObjeto(p1){
p1.nombre = 'Ignacio';
p1.apellido = ' perez';
}
cambiarValorObjeto(persona);
console.log(persona);