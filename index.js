let menuVisible = false;
//funcion que oculta o muestra el menu

function mostrarOcutarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que se selecciona una opicon
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("flutterflow");
        habilidades[1].classList.add("figma");
        habilidades[2].classList.add("canva");
        habilidades[3].classList.add("html-y-css");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("nodejs");
        habilidades[6].classList.add("wordpress");
        habilidades[7].classList.add("webflow");
        habilidades[8].classList.add("sql");
        habilidades[9].classList.add("scrum");
    }

}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
