/*OUR WORKS CON FILTROS*/

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

//le paso un parametro predeterminadon en el caso de que no se pase parámetro en la llamada a la funcion. Se le asigna el valor directamente en los parentesis
function generarPortfolio(filtro=null){

    trabajos.innerHTML = "";
   
    for(let i=0; i<artPortfolio.length; i++){

        // Si hay un filtro y no coincide con el valor de h4, se salta este artículo.
        //El continue es una palabra clave en JavaScript (y en muchos otros lenguajes de programación) que se usa dentro de bucles (for, while, do...while) para saltarse la iteración actual y continuar con la siguiente iteración del bucle.

        if (filtro && artPortfolio[i].h4 !== filtro) continue;

        let articulo=document.createElement("article"); 
        articulo.classList.add("w32", "tercio", "w100m");

        let enlace = document.createElement("a");
        enlace.classList.add("posicionRel")
        enlace.setAttribute("href", artPortfolio[i].link)
        
        let imagen=document.createElement("img"); 
        imagen.setAttribute("src", artPortfolio[i].imagenSrc); 
        imagen.setAttribute("alt", artPortfolio[i].imagenAlt);
        imagen.classList.add("w100"); 
        enlace.appendChild(imagen); 

        articulo.appendChild(enlace); 
    
        let h4=document.createElement("h4"); 
        h4.innerText=(artPortfolio[i].h4); 
        h4.classList.add("chicos", "openSans"); 
        h4.classList.add(artPortfolio[i].h4Clase); 
        articulo.appendChild(h4); 
    
        let h3=document.createElement("h3");
        h3.innerText=(artPortfolio[i].h3);
        h3.classList.add("subtitulos", "droidSerif");
        articulo.appendChild(h3);
    
        trabajos.appendChild(articulo);

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

generarPortfolio();

let botonTodos = document.getElementById("botonAll");
let botonMarca = document.getElementById("botonBranding");
let botonMovil = document.getElementById("botonMobile");
let botonWeb = document.getElementById("botonWebsite");

// Evento del botón "Todos"
botonTodos.addEventListener("click", () => {
    generarPortfolio();
});

// Evento del botón "Branding"
botonMarca.addEventListener("click", () => {
    generarPortfolio("Branding");
});

// Evento del botón "Mobile"
botonMovil.addEventListener("click", () => {
    generarPortfolio("Mobile");
});

// Evento del botón "Website"
botonWeb.addEventListener("click", () => {
    generarPortfolio("Website");
});

/*CUSTOMERS ABOUT US*/

let customersAboutUs = document.getElementById("custAboutUs");

const customers = [
    {
        imagen: "assets/imgs/chica-pelirroja.jpg",
        comentario: '“Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.”',
        nombre: "Sophia Allison",  
        cargo: "- CEO of Marco Inc.",
        linea: "colorNaranja"
    },
    {
        imagen: "assets/imgs/chico-lentes.jpg",
        comentario: '“Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.”',
        nombre: "JOSEPH BLAKE",
        cargo: "- Designer at Elastic Themes",
        linea: "colorVioleta"
    },
    {
        imagen: "assets/imgs/chica-asiatica.jpg",
        comentario: '“Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.”',
        nombre: "EVELYN WALTERS" , 
        cargo: "- Founder of Uno Agency",
        linea: "colorRosa"
    }
];

const colores = ["fondoNaranja", "fondoVioleta", "fondoRosa"];

//defino las variables que se reutilizarán y actualizarán
let currentClient = 0;
let cuadrado;
let image;
let comment;
let nombre;
let cargo;
let botonAnt;
let botonSig;

function generar_customers(caja){

    //console.log("hola")
    
    cuadrado = document.createElement("div"); 
    cuadrado.classList.add("opacidadBaja", "vh60", "w32", "posicionAb", "w80m", "vh50q", "w50q", "w90m", "vh50m");
    caja.appendChild(cuadrado);
    
    let customerTotal = document.createElement("div");
    customerTotal.classList.add("posicionAb", "df", "columna", "centerX", "centerY", "vh", "w78", "spacea","w100m", "w70q", "vh50q");
    
    image = document.createElement("img");
    image.classList.add("redonda");
    
    let linea = document.createElement("div");
    linea.classList.add("lineaNegra", "posicionRel", "w90q", "centerXq", "centerYq","dfQ", "centerX","centerY");
    
    comment = document.createElement("p");
    comment.classList.add("parrafoTitulo", "w78", "fontSize1-2m", "w90m", "w90q");
    
    let datosCliente = document.createElement("div");
    datosCliente.setAttribute("class", "df", "marginBottom1m");
    nombre = document.createElement("h4");
    nombre.classList.add("parrafos", "openSans");
    cargo = document.createElement("h4");
    cargo.classList.add("parrafos", "colorGris", "openSans");
    datosCliente.append(nombre, cargo);
    
    customerTotal.append(image, comment, linea, datosCliente);
    
    caja.appendChild(customerTotal);
    
    //botones
    botonAnt = document.getElementById("anterior");
    botonSig = document.getElementById("siguiente");

}


function logica_customers(){
    //llamo a la función de actualizar contenido para que ya cargue lo que se ve primero.
    updateClient();

    //en esta funcion reemplazo el contenido según en qué posicion del recorrido del array esté currentClient.
    function updateClient(){

        //recorre el array y ejecuta una funcion para cada uno. En este caso, toma a cada elemento del array (que son clases), y le remueve la clase que se llame igual que el elemento de cada itinerancia del array.
        colores.forEach(color => cuadrado.classList.remove(color));

        cuadrado.classList.add(colores[currentClient]);

        image.setAttribute("src", customers[currentClient].imagen);

        comment.innerHTML=customers[currentClient].comentario;

        nombre.innerHTML=customers[currentClient].nombre;
        cargo.innerHTML=customers[currentClient].cargo;
    }

    function avanza(){
        currentClient++;

        if(currentClient>customers.length-1){
            currentClient=0;
        }

        updateClient();
    }

    function retrocede(){
        currentClient--;

        if (currentClient<0){
            currentClient=customers.length-1;
        }

        updateClient();
    }

    botonAnt.addEventListener('click', retrocede);
    botonSig.addEventListener('click', avanza);
}


generar_customers(customersAboutUs);
logica_customers();

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