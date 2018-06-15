window.cipher = {
  offset : 33,
  encode: (string, offset)  => {

    let cifrado="";
    for(let i=0; i< string.length; i++){
      let codAsc = string[i].charCodeAt(); //Obtiene el codigo ASCII de la letra en la posicion q se le indica

      //if para minusculas
      if (codAsc >= 97 && codAsc<=122){
        cifrado +=String.fromCharCode((codAsc - 97 + Number(offset))% 26 + 97);
      }
      //else if para mayusculas
      else if(codAsc >= 65 && codAsc<=90){
        cifrado +=String.fromCharCode((codAsc - 65 + Number(offset))% 26 + 65);
      }
      else{
        cifrado += string[i];
      }
  }  //llave for
  return cifrado;
},//llave encodehoall

 decode: (string, offset) => {

     let descifrado="";
     for(let i=0; i < string.length; i++){
       let codAsc = string[i].charCodeAt(); //Obtiene el codigo ASCII de la letra en la posicion q se le indica
       //if para minusculas
       if (codAsc >= 97 && codAsc<=122){
         descifrado+=String.fromCharCode((codAsc + 85 - Number(offset))% 26 + 97);
         console.log(codAsc);
       }
       //else if para mayusculas
       else if(codAsc >= 65 && codAsc<=90){
         descifrado+=String.fromCharCode((codAsc + 65 - Number(offset))% 26 + 65);
       }
       else{
         descifrado += string[i];
       }
   }
    //document.getElementById("resultado").value=descifrado;
   return descifrado;
 },
 createCipherWithOffset:()=>{
   //return window.encode + window.decode;
 }
}
