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

updateBack()

function updateBack(){
    //img de fondo
    banner.style.backgroundImage = carrusel[0].imagenFondo;

    //div que agrupa todo
    let divBanner = document.createElement("div");
    divBanner.classList.add("textCenter", "colorBlanco", "columna", "centerY", "h20", "spacea", "w50", "w100m",);
    banner.appendChild(divBanner);

    //subtitulo
    let chico = document.createElement("h3");
    chico.innerHTML = carrusel[currentFoto].subtitulo;
    chico.classList.add("chicos");
    divBanner.appendChild(chico);

    //titulo principal
    let titPrincipal = document.createElement("h1");
    titPrincipal.innerHTML = carrusel[currentFoto].titulo;
    titPrincipal.classList.add("titPrincipal");
    divBanner.appendChild(titPrincipal);

    //linea
    let linea1 = document.createElement("div");
    linea1.classList.add("linea");
    divBanner.appendChild(linea1);

    //descripcion
    let descripcion = document.createElement("p");
    descripcion.innerHTML = carrusel[currentFoto].descripcion;
    descripcion.classList.add("parrafos");
    divBanner.appendChild(descripcion);

    //boton !! capaz hay que ponerle hacia donde va
    let botonBanner = document.createElement("button");
    botonBanner.innerHTML = carrusel[currentFoto].textoBoton;
    botonBanner.classList.add("paddingBotones", "fondoBlanco", "fontBotones", "sinBorde", "fitContent");
    divBanner.appendChild(botonBanner);
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



