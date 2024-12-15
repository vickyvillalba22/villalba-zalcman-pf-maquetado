/*IMÁGENES*/

const galeriaImgs = [["assets/imgs/tres-personas.jpeg", "Hombre caminando por el medio de un living"], ["assets/imgs/cabina.jpg", "Mujer hablando por teléfono en una cabina"], ["assets/imgs/chico-restaurant.jpg", "Hombre de traje sonriente"], ["assets/imgs/silla-cabina.jpg", "Cabina"]];

let contImagenes = document.getElementById("galeriaImagenes");

function armar_galeria_imgs(){

    for(let i=0; i<galeriaImgs.length; i++){

        let imagen = document.createElement("img");
        imagen.classList.add("w50", "w100m");
        imagen.setAttribute("src", galeriaImgs[i][0]); 
        imagen.setAttribute("alt", galeriaImgs[i][1]);

        contImagenes.appendChild(imagen);
        
    }

}

armar_galeria_imgs();

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

/*FORM MAIL SOLITO*/

let campoMailSolo = document.getElementById("email");
let campoErrorMail = document.getElementById("acaErrorMail");

let botonMail = document.getElementById("submitMail");

function validar_mail_solo(event){

    event.preventDefault();

    campoErrorMail.innerHTML="";

    //mail - lastIndexOf busca el ultimo indice del punto en este caso, por si el usuario tiene un punto antes en su mail
    if (campoMailSolo.value.indexOf("@") === -1 || 
    campoMailSolo.value.indexOf(".") === -1 || 
    campoMailSolo.value.indexOf("@") > campoMailSolo.value.lastIndexOf(".")) {
        campoErrorMail.innerHTML = "El email debe contener '@' y '.' correctamente ubicados. ";
        campoMailSolo.classList.add("bordeRojo")
    } else {
        campoMailSolo.classList.remove("bordeRojo");
        campoMailSolo.classList.add("bordeVerde");
        campoErrorMail.innerHTML = "Submitted!";
    }
}

botonMail.addEventListener('click', validar_mail_solo);

/*LATEST POSTS FROM OUR BLOG*/

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