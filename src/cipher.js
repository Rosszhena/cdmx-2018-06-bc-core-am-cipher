//window.cipher = {
  // ...

//};


let  cadena = prompt("indica la cadena a cifrar");
let iteraciones = parseInt(prompt("indica el numero de iteraciones"));
/*
let cadena1 = document.getElementById("cadena1").value;
let cadena2 = document.getElementById("cadena2").value;
let iteraciones = document.getElementById("iteraciones").value;*/


const cipher  = function(cadena,iteraciones){
  document.write("</br>" + "Cifrado:\n\n");
  for(let i=0; i < cadena.length; i++){
    let letra = cadena.toUpperCase().charCodeAt(i); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
    let cifrado=String.fromCharCode((letra - 65 + iteraciones)% 26 + 65);
    document.write(cifrado );
}   //llave for
}
const desencriptar=function(cadena,iteraciones){
  document.write("</br>" + "Descifrado:\n\n");
  for(let i=0; i < cadena.length; i++){
    let letra = cadena.toUpperCase().charCodeAt(i); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
    let descifrado=String.fromCharCode((letra + 65 - iteraciones)% 26 + 65);
    document.write( descifrado);
}
};

cipher(cadena, iteraciones);
desencriptar(cadena, iteraciones);
