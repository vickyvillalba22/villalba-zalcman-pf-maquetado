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