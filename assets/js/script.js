let carrusel=[
    {
        imagenFondo: 'url("../imgs/bolsa-plantas.jpg")',
        subtitulo: "deisgn & branding",
        titulo:    "We are Floria Agency" ,
        descripcion: "hola",
        textoBoton: "boton",
    },
    {
        imagenFondo: 'url("../imgs/bolsa-plantas.jpg")',
        subtitulo: "deisgn & branding",
        titulo:    "We are Floria Agency" ,
        descripcion: "hola",
        textoBoton: "boton",
    },
    {
        imagenFondo: 'url("../imgs/bolsa-plantas.jpg")',
        subtitulo: "deisgn & branding",
        titulo:    "We are Floria Agency" ,
        descripcion: "hola",
        textoBoton: "boton",
    }  
]

let currentFoto=0;

let banner = document.getElementById("sliderA");
updateBack()


function updateBack(){
    console.log(carrusel);
    banner.style.backgroundImage = carrusel[0].imagenFondo;
    /*let chico = document.createElement("h3");
    chico.innerHTML = carrusel[currentFoto].subtitulo;
    console.log(chico);
    chico.classList.add("chicos");
    banner.appendChild(chico);*/
}

