//controlando etiquetas con el dom 

//1.ALMACENAR EN MEMORIA ES DECIR CREAR UNA VARIABLE 
//LA ETIQUETA QUE AUIERO CONTROLAR 

let etiquetaImagen=document.getElementById("fotografia")

//2.CONTROLANDO NUESTRAS ETIQUETA
//2.1 Controlar es cambiar la fuente (src) de una etiqueta 

etiquetaImagen.src="./img/samuray.jpg"

//2.2 CONTROLAR ES CAMBIAR EL CONTENIDO DE TEXTO DE UNA ETIQUETA
let etiquetatitulo=document.getElementById("titulo")
etiquetatitulo.textContent="HISTORIA"

//2.3 copntrolar es arreglar estilos
//etiquetatitulo.classList.add('fuente','alineado')

//2.4 controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
//etiquetaParrafo.classList.remove('text-danger')

//2.5 controlar es dectetar eventos 
let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo click")
})

