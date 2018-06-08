//window.cipher = {
  // ...

//};

let  cadena = prompt("indica la cadena a cifrar");
let iteraciones = parseInt(prompt("indica el numero de iteraciones"));

const cipher  = function(cadena, iteraciones){
  for(let i=0; i < cadena.length; i++){
    let letra = cadena.toUpperCase().charCodeAt(i); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
    let cifrado=String.fromCharCode((letra - 65 + iteraciones)% 26 + 65);
    document.write(cifrado);
    console.log(cifrado);
}   //llave for
}

const desencriptar=function(cadena, iteraciones){
  for(let i=0; i < cadena.length; i++){
    let letra = cadena.toUpperCase().charCodeAt(i); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
    let descifrado=String.fromCharCode((letra + 65 - iteraciones)% 26 + 65);
    console.log("descifrdo" + descifrado);
    document.write( descifrado);
}
};

cipher(cadena, iteraciones);
desencriptar(cadena, iteraciones);
