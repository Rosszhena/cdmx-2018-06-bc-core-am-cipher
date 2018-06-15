let string = document.getElementById("cadena");
let offset = document.getElementById("iteraciones");
let botonEncode = document.getElementById("encode");
let botonDecode = document.getElementById("decode");
let resultado = document.getElementById("resultado");

botonEncode.addEventListener("click", event =>{
resultado.value = window.cipher.encode(string.value,offset.value);
//console.log(resultado);
//resultado.defaulValue = cifrado;

}
);

botonDecode.addEventListener("click", event =>{
resultado.value = window.cipher.decode(string.value,offset.value);
//console.log(resultado);
//resultado.defaulValue = cifrado;

}
);
