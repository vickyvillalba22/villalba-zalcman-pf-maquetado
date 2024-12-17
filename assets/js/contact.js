/*FORM LARGO*/

let campoNombre = document.getElementById("name");
let campoEmail = document.getElementById("email");
let campoTelefono = document.getElementById("phone");
let campoDesc = document.getElementById("description");
let campoError = document.getElementById("acaError");
let campoExito = document.getElementById("acaExito");
let botonEnviarLargo = document.getElementById("botonSubmitLargo");

function validar_form_largo(event){

    event.preventDefault();

    campoError.innerHTML = "";

        //nombre
        if (campoNombre.value.length < 3) {
            campoNombre.classList.add("bordeRojo")
            campoError.innerHTML += "El nombre debe contener al menos 3 caracteres. "
        } else {
            campoNombre.classList.remove("bordeRojo");
            campoNombre.classList.add("bordeVerde");
        }

        //mail
        if (campoEmail.value.indexOf("@") === -1 || 
        campoEmail.value.indexOf(".") === -1 || 
        campoEmail.value.indexOf("@") > campoEmail.value.lastIndexOf(".")) {
            campoError.innerHTML += "El email debe contener '@' y '.' correctamente ubicados. ";
            campoEmail.classList.add("bordeRojo")
        } else {
            campoEmail.classList.remove("bordeRojo");
            campoEmail.classList.add("bordeVerde");
        }


        //telefono
        if (campoTelefono.value.length < 5 || campoTelefono.value.indexOf("+") === -1) {
            campoError.innerHTML += "El teléfono debe contener '+' y al menos 5 caracteres. ";
            campoTelefono.classList.add("bordeRojo");
        } else {
            campoTelefono.classList.remove("bordeRojo");
            campoTelefono.classList.add("bordeVerde");
        }
    

        //descripcion
        if (campoDesc.value.length < 10) {
            campoError.innerHTML += "La descripción debe tener al menos 10 caracteres. ";
            campoDesc.classList.add("bordeRojo");
        } else {
            campoDesc.classList.remove("bordeRojo");
            campoDesc.classList.add("bordeVerde");
        }

        //validar todo
        if (campoNombre.value.length > 3 && 
            campoEmail.value.indexOf("@") !== -1 && 
            campoEmail.value.indexOf(".") !== -1 && 
            campoEmail.value.indexOf("@") < campoEmail.value.lastIndexOf(".") && 
            campoTelefono.value.length > 5 && 
            campoTelefono.value.indexOf("+") !== -1 && 
            campoDesc.value.length > 10){

                campoNombre.classList.add("bordeVerde");
                campoEmail.classList.add("bordeVerde");
                campoTelefono.classList.add("bordeVerde");
                campoDesc.classList.add("bordeVerde");

                campoError.innerHTML = "";
                campoExito.innerHTML = "Form submitted!"
                
        }
  

}

botonEnviarLargo.addEventListener('click', validar_form_largo);

/*INSTAGRAM*/

let posteos = [

    {
        imagen: "assets/imgs/instagram/hombre-sombrero-montaña.jpg",
        alt: "hombre con sombrero en la montaña"
    },

    {
        imagen: "assets/imgs/instagram/cafe-pizza.jpg",
        alt: "cafe con pizza"
    },

    {
        imagen: "assets/imgs/instagram/chica-flores-amarillas.jpg",
        alt: "chica con sombrero y flores amarillas"
    },

    {
        imagen: "assets/imgs/instagram/living-gris.jpg",
        alt: "living moderno gris"
    },

    {
        imagen: "assets/imgs/instagram/florero-rosa.jpg",
        alt: "florero con flores rosas"
    },

    {
        imagen: "assets/imgs/instagram/chica-sombrero.jpg",
        alt: "chica rubia con sobrero"
    },

    {
        imagen: "assets/imgs/instagram/ramo-verdes.jpg",
        alt: "ramo de hojas verdes"
    },

    {
        imagen: "assets/imgs/instagram/hombre-moto.jpg",
        alt: "hombre en una moto en el desierto"
    }

];

let contenedorInstagram = document.getElementById("contInstagram");

function armar_instagram(){

    for(let i=0; i<posteos.length; i++){

        let enlace = document.createElement("a");
        enlace.classList.add("w12_5", "w25q", "h50q", "w25m");
        enlace.setAttribute("href", "https://www.instagram.com/");

        let imagen = document.createElement("img");
        imagen.setAttribute("src", posteos[i].imagen);
        imagen.setAttribute("alt", posteos[i].alt);

        enlace.appendChild(imagen);
        contenedorInstagram.appendChild(enlace);

    }

}

armar_instagram();

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


/*TOOLTIPS*/

const tooltips = [
    "Haz clic para continuar",
    "Guarda los cambios aquí",
    "Elimina este elemento",
    "Más opciones disponibles",
    "Completa este campo",
    "Información adicional",
    "Revisa la configuración",
    "Ver detalles",
    "Descarga el archivo",
    "Actualiza la página"
  ];

const icons = document.querySelectorAll("i");

icons.forEach((icon)=>{


    icon.addEventListener('mouseover', ()=>{

        let textoTooltip = tooltips[3];
        icon.setAttribute("data-tooltip", textoTooltip);
        icon.classList.add("tooltip");

    });

    icon.addEventListener('mouseout', ()=>{
        icon.classList.remove("tooltip");
    })

});

/*DARK MODE*/

let cabeza = document.querySelector("header");
let navCabeza = document.querySelector("header nav");
let cuerpo = document.querySelector("main");
let pies = document.querySelector("footer");

const parrafos = document.querySelectorAll("main p");
const titulos = document.querySelectorAll("main h2");
const subtitulos = document.querySelectorAll("main h3");
const chiquitos = document.querySelectorAll("main h4");
const listas = document.querySelectorAll("main ul");
const navUl = document.querySelectorAll("header nav li a");
const activo = document.querySelectorAll(".active");
const iconosForm = document.querySelectorAll(".iconoForm");
const botonesRebeldes = document.querySelectorAll(".botonRebelde");

const linksFooter = document.querySelectorAll("footer a");

let botonToggle = document.createElement("button");
botonToggle.classList.add("sinBorde", "fondoNaranja", "paddingBotones", "botonRedondo", "fontBotones");
botonToggle.innerHTML = "Cambiar modo";

navCabeza.appendChild(botonToggle);

botonToggle.addEventListener('click', ()=>{

    cuerpo.classList.toggle("fondoNegro");

    cabeza.classList.toggle("fondoNegro");

    pies.classList.toggle("fondoNegro");
    pies.classList.toggle("colorBlanco");

    linksFooter.forEach((link)=>{
        link.classList.toggle("colorBlanco");
    });

    parrafos.forEach((parrafo)=>{
        parrafo.classList.toggle("colorBlanco");
    });

    titulos.forEach((titulo)=>{
        titulo.classList.toggle("colorBlanco");
    });

    subtitulos.forEach((subtitulo)=>{
        subtitulo.classList.toggle("colorBlanco");
    });

    chiquitos.forEach((chiquito)=>{
        chiquito.classList.toggle("colorBlanco");
    });

    listas.forEach((lista)=>{
        lista.classList.toggle("colorBlanco");
    });

    iconosForm.forEach((iconoForm)=>{
        iconoForm.classList.toggle("colorBlanco");
    });

    botonesRebeldes.forEach((boton)=>{
        boton.classList.toggle("colorBlanco");
    });

    navUl.forEach((li)=>{
        li.classList.toggle("colorBlanco");
    });

    activo.forEach((act)=>{
        act.classList.toggle("fondoRosa");
    })


});