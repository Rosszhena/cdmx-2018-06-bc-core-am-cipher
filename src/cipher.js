window.cipher = {
  offset : 33,
  encode: (string, offset)  => {

    let cifrado="";
    for(let i=0; i< string.length; i++){
      let codAsc = string[i].toUpperCase().charCodeAt(); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
      if(codAsc == 32   ){
        cifrado += string[i];
      }
      else {
        cifrado +=String.fromCharCode((codAsc - 65 + Number(offset))% 26 + 65);
        console.log(cifrado);
      }
  }  //llave for

  return cifrado;
},//llave encodehoall

 decode: (string, offset) => {

     let descifrado="";
     for(let i=0; i < string.length; i++){
       let codAsc = string[i].toUpperCase().charCodeAt(); //Obtiene el codigo ASCII de la letra en la posicion q se le indica

       if(codAsc == 32   ){
         descifrado += string[i];
       }
       else {
         descifrado+=String.fromCharCode((codAsc + 65 - Number(offset))% 26 + 65);
   }
    //document.getElementById("resultado").value=descifrado;
   }
   return descifrado;
 }
};
