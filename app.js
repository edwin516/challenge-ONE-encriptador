const textarea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}
function botonDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(palabraEncriptada){
    let matrizletras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    palabraEncriptada = palabraEncriptada;
   
    for (let i = 0; i < matrizletras.length; i++){
        if(palabraEncriptada.includes(matrizletras[i][0])){
            palabraEncriptada = palabraEncriptada.replaceAll(matrizletras[i][0],matrizletras[i][1])
        }

    }
    return palabraEncriptada;
}

function desencriptar(palabraDesencriptada){
    let matrizletras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    palabraDesencriptada = palabraDesencriptada;
   
    for (let i = 0; i < matrizletras.length; i++){
        if(palabraDesencriptada.includes(matrizletras[i][1])){
            palabraDesencriptada = palabraDesencriptada.replaceAll(matrizletras[i][1],matrizletras[i][0])
        }

    }
    return palabraDesencriptada;
}
//funcion copiar texto
const botonCopiar = document.querySelector(".copiar");
botonCopiar.addEventListener("click",() =>{
    var contenido = mensaje.value;
    navigator.clipboard.writeText(contenido).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
});
//funcion limpiar caja texto
const botonLimpiar = document.querySelector(".limpiar");
botonLimpiar.addEventListener("click", () => {
    mensaje.value = "";
    textarea.value = "";
    mensaje.style.backgroundImage = "";
});