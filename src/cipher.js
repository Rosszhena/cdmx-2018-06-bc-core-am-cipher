//window.cipher = {
  // ...

//};

let  cadena = prompt("indica la cadena a cifrar");
let iteraciones = parseInt(prompt("indica el numero de iteraciones"));


  for(let i=0; i < cadena.length; i++){
    let letra = cadena.charCodeAt(i); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
    let codigo = (letra - 65 + iteraciones)% 26 + 65;
    console.log("CON FORMULA" + codigo);
    console.log("ASCII"+letra);
    //let mensajecodigo+=codigo;
    let cifrado=String.fromCharCode(codigo);
    console.log("cifrdo" + cifrado);
    document.write(cifrado);
    //return cifrado;
}   //document.write(letra);
