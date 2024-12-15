/*SOME WORKS*/

let trabajos = document.getElementById("ourWorks");

const artPortfolio=[
    {
        link:"single-work.html",
        imagenSrc:"./assets/imgs/crema.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Mobile",
        h4Clase:"colorVerde",
        h3:"Marco interactive",
    },

    {
        link:"single-work.html",
        imagenSrc:"./assets/imgs/cuadro.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Branding",
        h4Clase:"branding",
        h3:"Colibri Identity",
    },

    {
        link:"single-work.html",
        imagenSrc:"./assets/imgs/tenis.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Website",
        h4Clase:"colorNaranja",
        h3:"Splash Template",
    },

    {
        link:"single-work.html",
        imagenSrc:"./assets/imgs/cartera.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Mobile",
        h4Clase:"colorVerde",
        h3:"Lumen & Co",
    },

    {
        link:"single-work.html",
        imagenSrc:"./assets/imgs/almohada-pajaro-flor.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Website",
        h4Clase:"colorNaranja",
        h3:"Delicious Café",
    },

    {
        link:"single-work.html",
        imagenSrc:"./assets/imgs/disco.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Branding",
        h4Clase:"branding",
        h3:"Calipso",
    }
]

function generarPortfolio(contenedorPortfolio, cantidad){
   
    for(let i=0; i<cantidad; i++){
        let articulo=document.createElement("article"); //creo el articulo
        articulo.classList.add("w32", "tercio", "w100m") //le agrego las clases generales

        let enlace = document.createElement("a");
        enlace.classList.add("posicionRel")
        enlace.setAttribute("href", artPortfolio[i].link)
        
        let imagen=document.createElement("img"); //creo imagen
        imagen.setAttribute("src", artPortfolio[i].imagenSrc); //le agrego src
        imagen.setAttribute("alt", artPortfolio[i].imagenAlt); //le agrego alt
        imagen.classList.add("w100"); //le agrego la clase general
        enlace.appendChild(imagen); //agreo la imagen al enlace

        articulo.appendChild(enlace); //agreo el enlace al articulo
    
        let h4=document.createElement("h4"); //creo el h4
        h4.innerText=(artPortfolio[i].h4); //le agrego el texto particular
        h4.classList.add("chicos", "openSans"); //le agrego la clase general
        h4.classList.add(artPortfolio[i].h4Clase); //le agrego la clase particular
        articulo.appendChild(h4); //lo muestro en articulo
    
        let h3=document.createElement("h3");
        h3.innerText=(artPortfolio[i].h3);
        h3.classList.add("subtitulos", "droidSerif");
        articulo.appendChild(h3);
    
        contenedorPortfolio.appendChild(articulo) //muestro en articulo completo

        let mas = document.createElement("a");
        let iconoMas= document.createElement("i");
        iconoMas.classList.add("fa-solid" ,"fa-plus", "fa-3x");
        mas.appendChild(iconoMas)
        mas.classList.add("masBoton", "oculto", "df", "centerX", "centerY");
        enlace.appendChild(mas);

        function apareceMas(){
            mas.classList.remove("oculto");
        }

        function desapareceMas(){
            mas.classList.add("oculto");
        }

        enlace.addEventListener("mouseover", apareceMas);
        enlace.addEventListener("mouseout", desapareceMas);
    }

}

generarPortfolio(trabajos, 3);

/*FOOTER - FORM CORTO*/

let campoNombreFooter = document.getElementById("yname");
let campoMailFooter = document.getElementById("ymail");

let campoErrorFooter = document.getElementById("acaErrorFooter");
let campoExitoFooter = document.getElementById("acaExitoFooter");

let botonSubmitFooter = document.getElementById("botonFooter");

function validar_form_footer(event){

    event.preventDefault();

    campoErrorFooter.innerHTML = "";
    campoExitoFooter.innerHTML = "";

    //nombre
    if (campoNombreFooter.value.length < 3) {
        campoNombreFooter.classList.add("bordeRojo")
        campoErrorFooter.innerHTML += "El nombre debe contener al menos 3 caracteres. "
    } else {
        campoNombreFooter.classList.remove("bordeRojo");
        campoNombreFooter.classList.add("bordeVerde");
    }

    //mail
    if (campoMailFooter.value.indexOf("@") === -1 || 
    campoMailFooter.value.indexOf(".") === -1 || 
    campoMailFooter.value.indexOf("@") > campoMailFooter.value.indexOf(".")) {
        campoErrorFooter.innerHTML += "El email debe contener '@' y '.' correctamente ubicados. ";
        campoMailFooter.classList.add("bordeRojo")
    } else {
        campoMailFooter.classList.remove("bordeRojo");
        campoMailFooter.classList.add("bordeVerde");
    }

    if(campoNombreFooter.value.length > 3 && 
        campoMailFooter.value.indexOf("@") !== -1 && 
        campoMailFooter.value.indexOf(".") !== -1 && 
        campoMailFooter.value.indexOf("@") < campoMailFooter.value.indexOf(".")){

                campoNombreFooter.classList.add("bordeVerde");
                campoMailFooter.classList.add("bordeVerde");

                campoErrorFooter.innerHTML = "";
                campoExitoFooter.innerHTML = "Form submitted!";

        }

}

botonSubmitFooter.addEventListener('click', validar_form_footer);