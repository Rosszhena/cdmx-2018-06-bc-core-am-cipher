//window.cipher = {
  // ...

//};
/*
const cipher  = function(){
  let cadena = document.getElementById("cadena").value;
  let iteraciones = parseInt(document.getElementById("iteraciones").value);
  let codAsc;
  let cifrado="";
  for(let i=0; i < cadena.length; i++){
    codAsc = cadena.toUpperCase().charCodeAt(i); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
    cifrado+=String.fromCharCode((codAsc - 65 + iteraciones)% 26 + 65);}

}   //llave for
document.getElementById("resultado").value=cifrado;
}*/
const desencriptar=function(){
  let cadena = document.getElementById("cadena").value;
  let iteraciones = parseInt(document.getElementById("iteraciones").value);
  let codAsc;
  let descifrado="";
  for(let i=0; i < cadena.length; i++){
    codAsc = cadena.toUpperCase().charCodeAt(i); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
    descifrado+=String.fromCharCode((codAsc + 65 - iteraciones)% 26 + 65);

}
document.getElementById("resultado").value=descifrado;
}
