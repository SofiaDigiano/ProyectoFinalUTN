// SECCION TARJETAS INICIO Para redireccionar en ambos botones de las tarjetas a las otras secciones
    function redirectToPage(page) {
        window.location.href = page;
    }


// EFECTO DEL LOGO SUPERIOR
    document.addEventListener("DOMContentLoaded", function() {
        //  elemento SVG
        var logo = document.querySelector("svg");
  
        // Añade la clase 
        logo.classList.add("fade");
      });


//  VIDEO SECCION HISTORIA

let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");


setTimeout(()=>{

    document.getElementById('showTime').innerHTML=` Duracion video  4:41`},100);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)
    
}

playBoton.addEventListener('click',()=>{
    video.play()

   
});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
});


// SECCION JUEGO

function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var id = event.dataTransfer.getData("text/plain");
    var draggedElement = document.getElementById(id);
    var dropTarget = event.target;
  
    //chequea que el elemento se suelte en un recuadro
    if (dropTarget.classList.contains("caja")) {
      dropTarget.innerHTML = ''; 
      dropTarget.appendChild(draggedElement);
    }
  }
  
  function reinicio() {
    var cajas = document.querySelectorAll('.caja');
    cajas.forEach(function(caja) {
      caja.innerHTML = '<p>Arrastra y suelta la imagen aquí</p>';
    });
  }
// Para reiniciar con el boton y actualizar la pagina
  function reinicio() {
    window.location.reload();
  }