const carrusel=[
    {
        imagenFondo: "assets/imgs/bolsa-plantas.jpg",
        subtitulo: "design & branding",
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
    titPrincipal.classList.add("titPrincipal" , "fontSize3m", "lineaBlanca", "posicionRel", "df", "centerX", "hIconos", "centerY", "achicarPrincipal", "droidSerif");
    divBanner.appendChild(titPrincipal);

    //descripcion
    let descripcion = document.createElement("p");
    descripcion.classList.add("parrafos", "openSans");
    divBanner.appendChild(descripcion);

    //boton !! capaz hay que ponerle hacia donde va
    let botonBanner = document.createElement("button");
    botonBanner.classList.add("paddingBotones", "fondoBlanco", "fontBotones", "sinBorde", "fitContent");
    botonBanner.setAttribute("href", "#someWorks");

    
    let sectionWorks = document.getElementById("someWorks");

    botonBanner.addEventListener("click", () => {
        sectionWorks.scrollIntoView({ behavior: "smooth" });
    });

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


/*SECTION SOME OF OUR WORKS*/
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

generarPortfolio(trabajos, 6);

/*LOGOS*/

const arrayLogos = ["./assets/imgs/logos/logoAven.png", "./assets/imgs/logos/logoEarth.png", "./assets/imgs/logos/logoIdeaa.png", "./assets/imgs/logos/logoZootv.png", "./assets/imgs/logos/logoCodeLab.png", "./assets/imgs/logos/logoCircle.png"];

let contLogos = document.getElementById("contenedorLogos");

function armarLogos(){

    for (let i=0; i<arrayLogos.length; i++){

        let linkLogo = document.createElement("a");
        linkLogo.classList.add("w30q", "w40m");

        let imagenLogo = document.createElement("img");
        imagenLogo.setAttribute("src", arrayLogos[i]);
        imagenLogo.classList.add("logos", "w100m");
    
        linkLogo.appendChild(imagenLogo);

        contLogos.appendChild(linkLogo);
    
    }
}

armarLogos()

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


/*SERVICES WE CAN PROVIDE*/

const servicios = [

    {
        vector: "assets/imgs/iconos/hojas.svg",
        tituloServicio: "Beautifully Designed",
        parrafoServicio: "Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.",
    },

    {
        vector: "assets/imgs/iconos/compu.svg",
        tituloServicio: "100% Responsive",
        parrafoServicio: "Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.",
    },

    {
        vector: "assets/imgs/iconos/raqueta-pelota.svg",
        tituloServicio: "Smooth Animations",
        parrafoServicio: "Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.",
    },

    {
        vector: "assets/imgs/iconos/cajonera.svg",
        tituloServicio: "CMS Content",
        parrafoServicio: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult.",
    },

    {
        vector: "assets/imgs/iconos/circulitos.svg",
        tituloServicio: "Pack of Components",
        parrafoServicio: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult.",
    },

    {
        vector: "assets/imgs/iconos/chat.svg",
        tituloServicio: "Friendly Support",
        parrafoServicio: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult.",
    },


];

let contServicios = document.getElementById("contenedorServicios");

function generar_servicios(){

    for (let i=0; i<servicios.length; i++){

        let articulo = document.createElement("article");
        articulo.classList.add("h8", "w32", "df", "w50q", "w100m",  "marginTop3m");

        let contVector = document.createElement("div");
            let figura = document.createElement("figure");
            figura.classList.add("redondo");
            let vector = document.createElement("img");
            vector.classList.add("vectores", "w100");
            vector.setAttribute("src", servicios[i].vector);
            contVector.appendChild(figura);
            figura.appendChild(vector);

        let contInfo = document.createElement("div");
            contInfo.classList.add("df", "columna", "spacea", "marginLeft07");
            let titulo = document.createElement("h3");
            titulo.classList.add("subtitulos", "droidSerif");
            titulo.innerHTML = servicios[i].tituloServicio;
            let parrafo = document.createElement("p");
            parrafo.classList.add("parrafitos", "colorGris", "openSans");
            parrafo.innerHTML = servicios[i].parrafoServicio;
            let learnMore = document.createElement("a");
            learnMore.innerHTML = "Learn More"
            learnMore.classList.add("chicos", "bottomNegro", "colorNegro", "fitContent", "openSans");
            learnMore.setAttribute("href", "about.html");
            contInfo.append(titulo, parrafo, learnMore);

        articulo.append(contVector, contInfo);
        contServicios.appendChild(articulo);

    }

}

generar_servicios();


/*OUR AMAZING TEAM*/

const miembros = [

    {
        foto1: "assets/imgs/hombre1.jpg",
        foto2: "assets/imgs/hombre2.jpg",
        nombre: "Roger Chavez",
        rol: "Founder CEO",
        alt: "Roger Chavez, hombre con fondo gris"
    },

    {
        foto1: "assets/imgs/mujer1.jpg",
        foto2: "assets/imgs/mujer2.jpg",
        nombre: "Pamela Riley",
        rol: "Designer",
        alt: "Pamela riley, mujer con fondo naranja"
    },

    {
        foto1: "assets/imgs/hombre-azul-1.jpg",
        foto2: "assets/imgs/hombre-azul-2.jpg",
        nombre: "John Davidson",
        rol: "Developer",
        alt: "John Davidson, hombre con fondo azul"
    },

    {
        foto1: "assets/imgs/mujer-rosa1.jpg",
        foto2: "assets/imgs/mujer-rosa2.jpg",
        nombre: "Christina Parker",
        rol: "PR Manager",
        alt: "Christina Parker, mujer con fondo rosa"
    }

];

const iconos =[

    {
        clase1: "fa-brands",
        clase2: "fa-twitter",
        color: "colorNegro",
        enlace: "https://x.com/?lang=es"
    },

    {
        clase1: "fa-brands",
        clase2: "fa-facebook",
        color: "colorNegro",
        enlace: "https://www.facebook.com/"
    },

    {
        clase1: "fa-brands",
        clase2: "fa-instagram",
        color: "colorNegro",
        enlace: "https://www.instagram.com/"
    }

]

let contenedorTeam = document.getElementById("ourAmazing");

function generar_team (){

    for (let i=0; i<miembros.length; i++){

    let articulo = document.createElement("article");
    articulo.classList.add("df", "columna", "w23", "spacea", "w45q", "posicionRel", "w100m");

        let imagen = document.createElement("img");
        imagen.classList.add("w100", "h80", "objFit");
        imagen.setAttribute("src", miembros[i].foto1);
        imagen.setAttribute("alt", miembros[i].alt);

        imagen.addEventListener('mouseover', ()=>{
            imagen.setAttribute("src", miembros[i].foto2);
            }
        );
        imagen.addEventListener('mouseout', ()=>{
            imagen.setAttribute("src", miembros[i].foto1);
        })

        let contIconos = document.createElement("div");
        contIconos.classList.add("posicionAb", "df", "spaceb", "hIconos", "w40", "cajaIconos", "fondoBlanco", "bottom17");

        for (let j=0; j<iconos.length; j++){

            let link = document.createElement("a");
            link.classList.add("w32", "centerX", "centerY");
            link.setAttribute("href", iconos[j].enlace);

            let icono = document.createElement("i");
            icono.classList.add(iconos[j].clase1, iconos[j].clase2, iconos[j].color);

            link.appendChild(icono);
            
            contIconos.appendChild(link);
        }

        let contMiembro = document.createElement("div");
        contMiembro.classList.add("df", "columna", "fStart");
        let nombre = document.createElement("h3");
        nombre.innerHTML = miembros[i].nombre;
        nombre.classList.add("subtitulos", "droidSerif");
        nombre.setAttribute("id", "persona");
        let rol = document.createElement("p");
        rol.innerHTML = miembros[i].rol;
        rol.classList.add("marginTL", "parrafitos", "colorGris", "openSans");
        contMiembro.append(nombre, rol);

        articulo.append(imagen, contIconos, contMiembro);
        contenedorTeam.appendChild(articulo);

    }    

}

generar_team();

/*FORMULARIO LARGO*/

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


/*FROM OUR BLOG*/

let contenedorBlog = document.getElementById("contenedorOurBlog");

const arrayBlog=[
    {
        link: "blog.html",
        imagenSrc: "assets/imgs/libros-lampara-rara.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Marketing",
        h3Color: "branding",
        h2:"Enhance Your Brand Potential With Giant Advertising Blimps",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 25, 2019",
        fotoSrc: "assets/imgs/hombre-azul-1.jpg",
        nombre: "John Davidson",
    },

    {
        link: "blog.html",
        imagenSrc: "assets/imgs/pochoclos-jean.jpg",
        imagenAlt: "persona comiendo pochoclos",
        h3Texto: "Design",
        h3Color: "colorGris",
        h2:"Free Advertising For Your Online Business",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 18, 2019",
        fotoSrc: "assets/imgs/mujer-rosa1.jpg",
        nombre: "Christina Parker",
    },

    {
        link: "blog.html",
        imagenSrc: "assets/imgs/notebook-flores-rosas.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Productivity",
        h3Color: "colorNaranja",
        h2:"Change your mind, change your luck",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 10, 2019",
        fotoSrc: "assets/imgs/mujer1.jpg",
        nombre: "Pamela Riley",
    } ,

    
    
]

function generarBlog(){
    
    for(let i=0; i<arrayBlog.length; i++){

        let articulo=document.createElement("article"); //creo el articulo
        articulo.classList.add("w32", "vh70fijo", "df", "columna", "spaceb", "w45q", "w100m", "marginTopQ", "marginTop3m") //le agrego las clases generales

        let enlace = document.createElement("a");
        enlace.classList.add("posicionRel")
        enlace.setAttribute("href", arrayBlog[i].link)
        
        let imagen=document.createElement("img"); //creo imagen
        imagen.setAttribute("src", arrayBlog[i].imagenSrc); //le agrego src
        imagen.setAttribute("alt", arrayBlog[i].imagenAlt); //le agrego alt
        enlace.appendChild(imagen); //agreo la imagen al enlace

        articulo.appendChild(enlace);

        let div=document.createElement("div");
        div.classList.add("textCenter");

        let h3Subtitulo=document.createElement("h3"); 
        h3Subtitulo.innerText=(arrayBlog[i].h3Texto); 
        h3Subtitulo.classList.add("chicos", "openSans", arrayBlog[i].h3Color); 
        div.appendChild(h3Subtitulo); //agrego el h3subtitulo al div contenedor

        let h2=document.createElement("h2"); 
        h2.innerText=(arrayBlog[i].h2);
        h2.classList.add("titIntermedio", "droidSerif")
        div.appendChild(h2); //agrego el h2 al div contenedor

        let p=document.createElement("p"); 
        p.innerText=(arrayBlog[i].parrafo);  
        p.classList.add("parrafos", "colorGris", "marginTop1", "openSans");
        p.style.textTransform = "none"
        div.appendChild(p); //agrego el p al div contenedor

        articulo.appendChild(div); //lo muestro en articulo

        let divInferior=document.createElement("div");
        divInferior.classList.add("hForms", "columna", "spaceb");

        let linea1=document.createElement("div");
        linea1.classList.add("bordeTopGris", "marginTop1m");
        divInferior.appendChild(linea1);

        let divFoto=document.createElement("div");
        divFoto.classList.add("df", "centerX","centerY");

        let fecha=document.createElement("p"); 
        fecha.innerText=(arrayBlog[i].fecha);  
        fecha.classList.add("chicos", "openSans");
        divFoto.appendChild(fecha);

        let foto=document.createElement("img"); //creo imagen
        foto.setAttribute("src", arrayBlog[i].fotoSrc); //le agrego src
        foto.classList.add("redondita")
        divFoto.appendChild(foto); //agreo la imagen al enlace

        let nombre=document.createElement("p"); 
        nombre.innerText=(arrayBlog[i].nombre);  
        nombre.classList.add("chicos", "openSans");
        divFoto.appendChild(nombre); 

        divInferior.appendChild(divFoto);

        let linea2=document.createElement("div");
        linea2.classList.add("bordeBottomGris");
        divInferior.appendChild(linea2);

        articulo.appendChild(divInferior);
        contenedorBlog.appendChild(articulo);
        contenedorBlog.classList.add("marginTop1")
        
    }

}

generarBlog(); 

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

/*const fotos = document.querySelectorAll("div img");
console.log(fotos);

fotos.forEach((imagen)=>{

    imagen.classList.add("dentro-div");

    imagen.addEventListener('mouseover', ()=>{

        console.log("hola");

        let textoTooltip = tooltips[5];
        imagen.setAttribute("data-tooltip", textoTooltip);
        imagen.classList.add("tooltip");  

    });

    imagen.addEventListener('mouseout', ()=>{
        imagen.classList.remove("tooltip");
    });

});*/


