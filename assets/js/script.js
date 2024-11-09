let carrusel=[
    {
        imagenFondo: 'url("../imgs/bolsa-plantas.jpg")',
        subtitulo: "deisgn & branding",
        titulo:    "We are Floria Agency" ,
        descripcion: "How you write your advertising copy will be based on where you will place your ad. If it’s a billboard ad, you’ll need a super catchy headline.",
        textoBoton: "See Our Works"
    },
    {
        imagenFondo: 'url("../imgs/bolsa-plantas.jpg")',
        subtitulo: "featured work",
        titulo:    "AppStarter" ,
        descripcion: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        textoBoton: "See Case Study"
    },
    {
        imagenFondo: 'url("../imgs/bolsa-plantas.jpg")',
        subtitulo: "featured work",
        titulo: "Delicious Café" ,
        descripcion: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        textoBoton: "See Case Study"
    }  
]

let currentFoto=0;

let banner = document.getElementById("sliderA");
let botonIzq = document.getElementById("izquierda");
let botonDer = document.getElementById("derecha");

   //div que agrupa todo
    let divBanner = document.createElement("div");
    divBanner.classList.add("textCenter", "colorBlanco", "columna", "centerY", "h20", "spacea", "w50", "w100m",);
    banner.appendChild(divBanner);

    //subtitulo
    let chico = document.createElement("h3");
    chico.classList.add("chicos");
    divBanner.appendChild(chico);

    //titulo principal
    let titPrincipal = document.createElement("h1");
    titPrincipal.classList.add("titPrincipal");
    divBanner.appendChild(titPrincipal);

    //linea
    let linea1 = document.createElement("div");
    linea1.classList.add("linea");
    divBanner.appendChild(linea1);

    //descripcion
    let descripcion = document.createElement("p");
    descripcion.classList.add("parrafos");
    divBanner.appendChild(descripcion);

    //boton !! capaz hay que ponerle hacia donde va
    let botonBanner = document.createElement("button");
    botonBanner.classList.add("paddingBotones", "fondoBlanco", "fontBotones", "sinBorde", "fitContent");
    divBanner.appendChild(botonBanner);

updateBack()

function updateBack(){
    
    //img de fondo
    banner.style.backgroundImage = carrusel[currentFoto].imagenFondo;

    chico.innerHTML = carrusel[currentFoto].subtitulo;

    titPrincipal.innerHTML = carrusel[currentFoto].titulo;

    descripcion.innerHTML = carrusel[currentFoto].descripcion;

    botonBanner.innerHTML = carrusel[currentFoto].textoBoton;

}

function siguiente(){
    currentFoto++;

    if (currentFoto>carrusel.length-1){
        currentFoto=0;
    }

    updateBack();
}

function anterior(){
    currentFoto--;

    if (currentFoto<0){
        currentFoto = carrusel.length-1;
    }

    updateBack();
}

botonIzq.addEventListener('click', anterior);
botonDer.addEventListener('click', siguiente);



/*SECTION SOME OF OUR WORKS*/

let trabajos=document.getElementById("ourWorks") //me traigo el contenedor

//creo el array de objetos con toda la info
let artPortfolio=[
    {
        link:"COMPLETAR",
        imagenSrc:"./assets/imgs/crema.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Mobile",
        h4Clase:"colorVerde",
        h3:"Marco interactive",
    },

    {
        link:"COMPLETAR",
        imagenSrc:"./assets/imgs/cuadro.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Branding",
        h4Clase:"branding",
        h3:"Colibri Identity",
    },

    {
        link:"COMPLETAR",
        imagenSrc:"./assets/imgs/tenis.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Website",
        h4Clase:"colorNaranja",
        h3:"Splash Template",
    },

    {
        link:"COMPLETAR",
        imagenSrc:"./assets/imgs/cartera.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Mobile",
        h4Clase:"colorVerde",
        h3:"Lumen & Co",
    },

    {
        link:"COMPLETAR",
        imagenSrc:"./assets/imgs/almohada-pajaro-flor.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Website",
        h4Clase:"colorNaranja",
        h3:"Delicious Café",
    },

    {
        link:"COMPLETAR",
        imagenSrc:"./assets/imgs/disco.jpg",
        imagenAlt:"crema con plantas y flores",
        h4:"Branding",
        h4Clase:"branding",
        h3:"Calipso",
    }
]

function generarPortfolio(){
    for(let i=0; i<artPortfolio.length; i++){
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
        h4.classList.add("chicos"); //le agrego la clase general
        h4.classList.add(artPortfolio[i].h4Clase); //le agrego la clase particular
        articulo.appendChild(h4); //lo muestro en articulo
    
        let h3=document.createElement("h3");
        h3.innerText=(artPortfolio[i].h3);
        h3.classList.add("subtitulos");
        articulo.appendChild(h3);
    
        trabajos.appendChild(articulo) //muestro en articulo completo

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

generarPortfolio()




