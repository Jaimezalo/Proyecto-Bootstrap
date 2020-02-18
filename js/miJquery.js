$(document).ready(inicializarEventos);

function inicializarEventos(){
    //empezarVideo();
    compruebaPrivacidad();

   $("#buscador").click(function(){
    $("div").each(function(){
    var div = $(this).text();
    var texto = $("#textobuscar").val();
    if(div.indexOf(texto)>0){
    
    $(this).css('background-color', 'yellow');
    }
    });
    });
   
    $("#idnombre").focus(function() {
        $("#log").text("El cuadro de texto 'nombre' ha obtenido el foco");
    });

}

function empezarVideo(){
    $('#video1').prop('muted',true).play(); 
    empezarVideo();
}

function compruebaPrivacidad() {
    $("#idsubmit").disabled = $("#privacidad").checked;
    }

