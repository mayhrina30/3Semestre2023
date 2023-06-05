let x = 10; // variable de tipo primitiva
console.log(x.length);


//OBJETO
let persona = {
    nombre: 'carlos',
    apellido: 'gil' , 
    email:'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ //metodo o funcion en javascrip
        return this.nombre+' '+this.apellido;


    }

}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto());

let persona2 = new Object(); //debe crear un objeto en memoria
persona2.nombre = ' juan';
persona2.direccion = ' salada 14';
persona2.telefono = '3456677878';
console.log(persona2.telefono);
console.log('creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//trabajamos solo con el objeto persona esta vez
console.log('cambiamos y eliminamos un error');
//tener cuidado al escribir en la propiedad
persona.apellida = 'Manzaneda';//cambiamos dinamicamnete un valor del objeto
delete persona.apellida; //eliminamos el error
console.log(persona);


//distintas forma de imprimir un objeto
//numero 1: la mas sensilla: concatenar cada valor de cada propiedad
console.log('distinta forma de imprimir un objeto 1');
console.log(persona.nombre+ ' ,  '+persona.apellido);

//numero 2. ataravez del ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);

    //numero 3: la funcion objeto.values()
    let personaArray = Object.values(persona);
    console.log(personaArray);
}

