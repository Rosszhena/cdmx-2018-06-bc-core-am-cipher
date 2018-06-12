//window.cipher = {
  // ...

//};
const cipher  = () => {
  let cadena = document.getElementById("cadena").value;
  let iteraciones = parseInt(document.getElementById("iteraciones").value);
  let cifrado="";
  for(let i=0; i < cadena.length; i++){
    let codAsc = cadena[i].toUpperCase().charCodeAt(); //Obtiene el codigo ASCII de la letra en la posicion q se le indica

    if(codAsc == 32 || ){
      cifrado += cadena[i];
      console.log(codAsc);
    } else {
      let formula =(cadena[i].toUpperCase().charCodeAt() - 65 + iteraciones)% 26 + 65;
      console.log(formula);
      cifrado +=String.fromCharCode(formula);
    }


}  //llave for
document.getElementById("resultado").value=cifrado;
return cifrado;
}
// const desencriptar= () =>{
//   let cadena = document.getElementById("cadena").value;
//   let iteraciones = parseInt(document.getElementById("iteraciones").value);
//   let codAsc;
//   let descifrado="";
//   for(let i=0; i < cadena.length; i++){
//     codAsc = cadena.toUpperCase().charCodeAt(i); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
//     descifrado+=String.fromCharCode((codAsc + 65 - iteraciones)% 26 + 65);
//
// }
// document.getElementById("resultado").value=descifrado;
// }
