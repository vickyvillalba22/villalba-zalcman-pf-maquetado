let carrusel=[
    {
        imagenFondo: "./assets/imgs/bolsa-plantas.jpg",
        subtitulo: "deisgn & branding",
        titulo:    "We are Floria Agency",
        descripcion: "How you write your advertising copy will be based on where you will place your ad. If it’s a billboard ad, you’ll need a super catchy headline.",
        textoBoton: "See Our Works"
    },
    {
        imagenFondo: "/assets/imgs/relojes-blancos.jpg",
        subtitulo: "featured work",
        titulo:    "AppStarter" ,
        descripcion: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        textoBoton: "See Case Study"
    },
    {
        imagenFondo: "/assets/imgs/almohada-pajaro-flor.jpg",
        subtitulo: "featured work",
        titulo: "Delicious Café" ,
        descripcion: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        textoBoton: "See Case Study"
    }  
];

let currentFoto=0;

let banner = document.getElementById("sliderA");
let botonIzq = document.getElementById("izquierda");
let botonDer = document.getElementById("derecha");

   //div que agrupa todo
    let divBanner = document.createElement("div");
    divBanner.classList.add("textCenter", "colorBlanco", "columna", "centerY", "h20", "spacea", "w50", "w100m");
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


/*CUSTOMERS ABOUT US*/

let customers = [
    {
        imagen: "/assets/imgs/chica-pelirroja.jpg",
        comentario: '“Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.”',
        nombre: "Sophia Allison",  
        cargo: "- CEO of Marco Inc.",
        color: "fondoNaranja",
        linea: "colorNaranja"
    },
    {
        imagen: "/assets/imgs/chico-lentes.jpg",
        comentario: '“Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.”',
        nombre: "JOSEPH BLAKE",
        cargo: "- Designer at Elastic Themes",
        color: "fondoVioleta",
        linea: "colorVioleta",
    },
    {
        imagen: "/assets/imgs/chica-asiatica.jpg",
        comentario: '“Magazine advertising is the most versatile, but this is solely dependent on the size of your ad and how many other ads compete with yours.”',
        nombre: "EVELYN WALTERS" , 
        cargo: "- Founder of Uno Agency",
        color: "fondoRosa",
        linea: "colorRosa"
    }
];

//creo y appendchileo todos los elementos html sin contenido pero con sus respectivas clases generales.
let contenedor = document.createElement("div");
contenedor.setAttribute("id", "contCustomers");
contenedor.classList.add("df", "columna", "centerX", "centerY");

let cuadrado = document.createElement("div");
cuadrado.classList.add("opacidadBaja", "vh60", "w32", "posicionRel");
contenedor.appendChild(cuadrado);

let customerTotal = document.createElement("div");
customerTotal.classList.add("posicionAb", "df", "columna", "centerX", "centerY", "h50", "w40", "spacea");
contenedor.appendChild(customerTotal);

let image = document.createElement("img");
image.classList.add("redonda");

let comment = document.createElement("p");
comment.classList.add("parrafoTitulo");

let linea = document.createElement("div");
linea.classList.add("linea");

let datosCliente = document.createElement("div");
datosCliente.setAttribute("class", "df");
let nombre = document.createElement("h4");
nombre.classList.add("parrafos");
let cargo = document.createElement("h4");
cargo.classList.add("parrafos", "colorGris");
datosCliente.append(nombre, cargo);

customerTotal.append(image, comment, linea, datosCliente);

let customersAboutUs = document.getElementById("custAboutUs");
customersAboutUs.appendChild(contenedor);

//botones
let botonAnt = document.getElementById("anterior");
let botonSig = document.getElementById("siguiente");

//defino una variable que representa la posicion en el array.
let currentClient = 0;

//llamo a la función de actualizar contenido para que ya cargue lo que se ve primero.
updateClient();

//en esta funcion reemplazo el contenido según en qué posicion del recorrido del array esté currentClient. Y pongo clases específicas, pero se me acumulan las clases, asique lo tengo que ver.
function updateClient(){

    cuadrado.classList.add(customers[currentClient].color);

    image.setAttribute("src", customers[currentClient].imagen);

    comment.innerHTML=customers[currentClient].comentario;

    linea.classList.add(customers[currentClient].linea);

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


/*SECTION FROM OUR BLOG - ME FALTAN COSAS!!*/

let arrayBlog=[
    {
        link: "marketing.html",
        imagenSrc: "/assets/imgs/libros-lampara-rara.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Marketing",
        h3Color: "branding",
        h2:"Enhance Your Brand Potential With Giant Advertising Blimps",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 25, 2019",
        fotoSrc: "/assets/imgs/mujer-rosa1.jpg",
        nombre: "John Davidson",

    }
    
]

let contenedorBlog=document.getElementById("contenedorOurBlog") //me traigo el contenedor

function generarBlog(){
    
    for(let i=0; i<arrayBlog.length; i++){
        let articulo=document.createElement("article"); //creo el articulo
        articulo.classList.add("w32", "df", "columna", "spacea", "w45q", "w100m", "marginTop3m") //le agrego las clases generales

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
        h3Subtitulo.classList.add("chicos", arrayBlog[i].h3Color); 
        div.appendChild(h3Subtitulo); //agrego el h3subtitulo al div contenedor

        let h2=document.createElement("h2"); 
        h2.innerText=(arrayBlog[i].h2);
        h2.classList.add("titIntermedio")
        div.appendChild(h2); //agrego el h2 al div contenedor

        let p=document.createElement("p"); 
        p.innerText=(arrayBlog[i].parrafo);  
        p.classList.add("parrafos", "colorGris", "marginTop1");
        p.style.textTransform = "none"
        div.appendChild(p); //agrego el p al div contenedor

        articulo.appendChild(div); //lo muestro en articulo

        let divInferior=document.createElement("div");
        divInferior.classList.add("hForms", "columna", "spaceb");

        let linea1=document.createElement("div");
        linea1.classList.add("lineaTercio");
        divInferior.appendChild(linea1);

        let divFoto=document.createElement("div");
        divFoto.classList.add("df", "centerX","centerY");

        let fecha=document.createElement("p"); 
        fecha.innerText=(arrayBlog[i].fecha);  
        p.classList.add("chicos");
        divFoto.appendChild(fecha);

        let foto=document.createElement("img"); //creo imagen
        foto.setAttribute("src", arrayBlog[i].fotoSrc); //le agrego src
        foto.classList.add("redondita")
        divFoto.appendChild(foto); //agreo la imagen al enlace

        let nombre=document.createElement("p"); 
        nombre.innerText=(arrayBlog[i].nombre);  
        nombre.classList.add("chicos");
        divFoto.appendChild(nombre); 

        divInferior.appendChild(divFoto);

        let linea2=document.createElement("div");
        linea2.classList.add("lineaTercio");
        divInferior.appendChild(linea2);

        articulo.appendChild(divInferior);
        contenedorBlog.appendChild(articulo);    
    }

}

generarBlog()