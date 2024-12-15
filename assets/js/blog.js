/*FROM OUR BLOG CON FILTROS*/

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
        nombre: "John Davidson"
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
        nombre: "Christina Parker"
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
        nombre: "Pamela Riley"
    } ,

    {
        link: "blog.html",
        imagenSrc: "assets/imgs/chocolatada.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Tutorial",
        h3Color: "colorVerde",
        h2:"A great way to generate all the motivation you need to get fit",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 25, 2019",
        fotoSrc: "assets/imgs/hombre-azul-1.jpg",
        nombre: "John Davidson"
    } ,

    {
        link: "blog.html",
        imagenSrc: "assets/imgs/madre-e-hija.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Marketing",
        h3Color: "colorRosa",
        h2:"Kindness and motivation tips challenge groups to make a difference",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 18, 2019",
        fotoSrc: "assets/imgs/mujer-rosa1.jpg",
        nombre: "Christina Parker"
    } ,

    {
        link: "blog.html",
        imagenSrc: "assets/imgs/plantas-muebles.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Design",
        h3Color: "colorVioleta",
        h2:"When you are down and out how do you get up and go forward",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 25, 2019",
        fotoSrc: "assets/imgs/hombre-azul-1.jpg",
        nombre: "John Davidson"
    } ,

    {
        link: "blog.html",
        imagenSrc: "assets/imgs/caballs.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Productivity",
        h3Color: "colorNaranja",
        h2:"Hypnosis 12 steps to acquire mind power",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 10, 2019",
        fotoSrc: "assets/imgs/mujer1.jpg",
        nombre: "Pamela Riley"
    } ,

    {
        link: "blog.html",
        imagenSrc: "assets/imgs/chicos-saltando.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Tutorial",
        h3Color: "colorVerde",
        h2:"Living in the now. Use it enrich your life",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 18, 2019",
        fotoSrc: "assets/imgs/mujer-rosa1.jpg",
        nombre: "Christina Parker"
    } ,

    {
        link: "blog.html",
        imagenSrc: "assets/imgs/mar-montana.jpg",
        imagenAlt: "cuadro que dice today is awesome, con lampara rara",
        h3Texto: "Design",
        h3Color: "colorVioleta",
        h2:"Change your mind, change your luck",
        parrafo: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.",
        fecha:"Jan 18, 2019",
        fotoSrc: "assets/imgs/mujer-rosa1.jpg",
        nombre: "Christina Parker"
    }   
    
]

function generarBlog(inicio, cantidad){
    
    for(let i=inicio; i<cantidad; i++){

        let articulo=document.createElement("article"); //creo el articulo
        articulo.classList.add("w32", "vh70fijo", "df", "columna", "spaceb", "w45q", "w100m", "marginTopQ", "marginTop3m", "marginTop4") //le agrego las clases generales

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

generarBlog(0, 6); 

let cajaBotones = document.getElementById("contBotones");
let botonNext = document.getElementById("buttonNext");
let botonPrev = document.createElement("button");
botonPrev.classList.add("fitContent", "fontBotones", "paddingBotones", "fondoBlanco", "df", "hForms", "centerY", "centerX");

botonNext.addEventListener('click', () => {
    console.log("Cargando más artículos...");
    
    // Limpiar el contenedor
    contenedorBlog.innerHTML = "";

    // Cargar más artículos
    generarBlog(6, 9);

    cajaBotones.innerHTML ="";

    //armo el nuevo boton
    botonPrev.innerHTML = "Previous";
    cajaBotones.appendChild(botonPrev);
    
});

botonPrev.addEventListener('click', ()=>{

    // Limpiar el contenedor
    contenedorBlog.innerHTML = "";

    // Cargar más artículos
    generarBlog(0, 6);

    cajaBotones.innerHTML ="";

    cajaBotones.appendChild(botonNext);

})
