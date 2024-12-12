import { generarBlog, generar_customers, logica_customers, generarPortfolio } from "./script.js";

const carrusel=[
    {
        imagenFondo: "assets/imgs/bolsa-plantas.jpg",
        subtitulo: "deisgn & branding",
        titulo:    "We are Floria Agency",
        descripcion: "How you write your advertising copy will be based on where you will place your ad. If it’s a billboard ad, you’ll need a super catchy headline.",
        textoBoton: "See Our Works"
    },
    {
        imagenFondo: "assets/imgs/relojes-blancos.jpg",
        subtitulo: "featured work",
        titulo:    "AppStarter" ,
        descripcion: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        textoBoton: "See Case Study"
    },
    {
        imagenFondo: "assets/imgs/almohada-pajaro-flor.jpg",
        subtitulo: "featured work",
        titulo: "Delicious Café" ,
        descripcion: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        textoBoton: "See Case Study"
    }  
];

    //esto está afuera de una funcion porque este modulo solo va a funcionar en la home

    let currentFoto=0;

    let banner = document.getElementById("sliderA");
    //console.log(banner);
    banner.classList.add("vh90", "centerX", "centerY", "caract-Banner", "vh50q");
    let botonIzq = document.getElementById("izquierda");
    let botonDer = document.getElementById("derecha");

   //div que agrupa todo
    let divBanner = document.createElement("div");
    divBanner.classList.add("textCenter", "colorBlanco", "columna", "centerY", "h20", "spacea", "w50", "w100m", "w70q");
    banner.appendChild(divBanner);

    //subtitulo
    let chico = document.createElement("h3");
    chico.classList.add("chicos", "openSans");
    divBanner.appendChild(chico);

    //titulo principal
    let titPrincipal = document.createElement("h1");
    titPrincipal.classList.add("titPrincipal" , "fontSize3m", "lineaBlanca", "posicionRel", "df", "centerX", "hIconos", "centerY", "achicarPrincipal");
    divBanner.appendChild(titPrincipal);

    //descripcion
    let descripcion = document.createElement("p");
    descripcion.classList.add("parrafos");
    divBanner.appendChild(descripcion);

    //boton !! capaz hay que ponerle hacia donde va
    let botonBanner = document.createElement("button");
    botonBanner.classList.add("paddingBotones", "fondoBlanco", "fontBotones", "sinBorde", "fitContent");
    divBanner.appendChild(botonBanner);


function updateBack(){
    
    //img de fondo
    banner.style.backgroundImage = `url(${carrusel[currentFoto].imagenFondo})`;

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

botonIzq.addEventListener('click', () => {
    pause();
    anterior();
} );
botonDer.addEventListener('click', () => {
    pause();
    siguiente();
} );

updateBack()

let interRapido;

function rapido(){
    interRapido = setInterval(siguiente, 5000);
}

function pause(){
    clearInterval(interRapido);
}

rapido();

/*SECTION LOGOS*/

const arrayLogos = ["/assets/imgs/logos/logoAven.png", "/assets/imgs/logos/logoEarth.png", "/assets/imgs/logos/logoIdeaa.png", "/assets/imgs/logos/logoZootv.png", "/assets/imgs/logos/logoCodeLab.png", "/assets/imgs/logos/logoCircle.png"];

let contLogos = document.getElementById("contenedorLogos");

function armarLogos(){

    for (let i=0; i<arrayLogos.length; i++){

        let linkLogo = document.createElement("a");
        linkLogo.classList.add("w30q", "w30m");

        let imagenLogo = document.createElement("img");
        imagenLogo.setAttribute("src", arrayLogos[i]);
        imagenLogo.classList.add("logos", "w100m");
    
        linkLogo.appendChild(imagenLogo);

        contLogos.appendChild(linkLogo);
    
    }
}

armarLogos()

/*SECTION SOME OF OUR WORKS*/
let trabajos = document.getElementById("ourWorks");
generarPortfolio(trabajos, 6);

/*CUSTOMERS ABOUT US*/

let customersAboutUs = document.getElementById("custAboutUs");

generar_customers(customersAboutUs);
logica_customers();


/*FROM OUR BLOG*/

let contenedorBlog = document.getElementById("contenedorOurBlog");
generarBlog(contenedorBlog);
