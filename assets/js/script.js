/*SECTION SOME OF OUR WORKS*/


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

export function generarPortfolio(contenedorPortfolio, cantidad){
   
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
        h3.classList.add("subtitulos");
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


/*CUSTOMERS ABOUT US*/

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
//const colores_lineas = ["colorNaranja", "colorVioleta", "colorRosa"];

//defino las variables que se reutilizarán y actualizarán
let currentClient = 0;
let cuadrado;
let image;
let comment;
let nombre;
let cargo;
let botonAnt;
let botonSig;

//creo y appendchileo todos los elementos html sin contenido pero con sus respectivas clases generales. Las lineas que crean elementos pueden quedar fuera de funciones porque no traen nada de otros lados.

export function generar_customers(caja){

    //console.log("hola")
    
    cuadrado = document.createElement("div"); 
    cuadrado.classList.add("opacidadBaja", "vh60", "w32", "posicionAb", "w80m", "vh50q", "w50q", "w90m", "vh80m");
    caja.appendChild(cuadrado);
    
    let customerTotal = document.createElement("div");
    customerTotal.classList.add("posicionAb", "df", "columna", "centerX", "centerY", "vh", "w78", "spacea","w100m", "w70q", "vh50q");
    
    image = document.createElement("img");
    image.classList.add("redonda");
    
    let linea = document.createElement("div");
    linea.classList.add("lineaNaranja", "posicionRel", "w90q", "centerXq", "centerYq","dfQ", "centerX","centerY");
    
    comment = document.createElement("p");
    comment.classList.add("parrafoTitulo", "w78", "fontSize1-2m", "w90m", "w90q");
    
    let datosCliente = document.createElement("div");
    datosCliente.setAttribute("class", "df", "marginBottom1m");
    nombre = document.createElement("h4");
    nombre.classList.add("parrafos");
    cargo = document.createElement("h4");
    cargo.classList.add("parrafos", "colorGris");
    datosCliente.append(nombre, cargo);
    
    customerTotal.append(image, comment, linea, datosCliente);
    
    caja.appendChild(customerTotal);
    
    //botones
    botonAnt = document.getElementById("anterior");
    botonSig = document.getElementById("siguiente");

}


export function logica_customers(){
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


/*SECTION FROM OUR BLOG*/

const arrayBlog=[
    {
        link: "marketing.html",
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
        link: "design.html",
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
        link: "design.html",
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



export function generarBlog(contenedor){
    
    for(let i=0; i<arrayBlog.length; i++){
        let articulo=document.createElement("article"); //creo el articulo
        articulo.classList.add("w32", "df", "columna", "spacea", "w45q", "w100m", "marginTopQ", "marginTop3m") //le agrego las clases generales

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
        contenedor.appendChild(articulo);
        contenedor.classList.add("marginTop1")
        
    }

}

