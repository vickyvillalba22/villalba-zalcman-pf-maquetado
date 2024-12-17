/*YOU MIGHT ALSO LIKE - FROM OUR BLOG*/ 

let contenedorBlog = document.getElementById("contenedorOurBlog");

const arrayBlog=[
    {
        link: "blog-item.html",
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
        link: "blog-item.html",
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
        link: "blog-item.html",
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

let todo = document.querySelector("body");

const parrafos = document.querySelectorAll("main p");
const titulos = document.querySelectorAll("main h2");
const subtitulos = document.querySelectorAll("main h3");
const chiquitos = document.querySelectorAll("main h4");
const listas = document.querySelectorAll("main ul");
const listasOrdenadas = document.querySelectorAll("main ol");
const navUl = document.querySelectorAll("header nav li a");
const activo = document.querySelectorAll(".active");
const iconosForm = document.querySelectorAll(".iconoForm");
const botonesRebeldes = document.querySelectorAll(".botonRebelde");
const quote = document.querySelectorAll("blockquote");

let botonToggle = document.createElement("button");
botonToggle.classList.add("sinBorde", "fondoNaranja", "paddingBotones", "botonRedondo", "fontBotones");
botonToggle.innerHTML = "Cambiar modo";

navCabeza.appendChild(botonToggle);

botonToggle.addEventListener('click', ()=>{

    cabeza.classList.toggle("fondoNegro");

    todo.classList.toggle("fondoNegro");

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
    });

    quote.forEach((quo)=>{
        quo.classList.toggle("colorBlanco");
    });

    listasOrdenadas.forEach((lista)=>{
        lista.classList.toggle("colorBlanco");
    })


});