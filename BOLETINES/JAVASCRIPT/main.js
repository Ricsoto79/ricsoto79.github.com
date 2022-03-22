let links = document.querySelectorAll(".close");

links.forEach(function(link){

    //agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

    //quitarle las clases de animación
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    //agregar clases para animar su salida
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function(){
        location.href = "../index.html"
        },600)
    
  
    return false;
    });
});

