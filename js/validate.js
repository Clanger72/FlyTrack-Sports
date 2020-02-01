//loader da logo para entrar 30s depois de carregar a página
//setTimeout(function(){
  //  document.getElementById('logo-load').classList.remove('hide');
   //}, 5000);
/*$(function(){
    var tamanhoJanela = $(window).width();
    alert(tamanhoJanela);
    if (tamanhoJanela > 1025) {   
        $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.nav-ocult').css("position", "fixed");
            $('.nav-ocult').css("display", "block");
            $('.nav-ocult').css("width", "100%");
        } else {
            $('.nav-ocult').css("display", "none");
        }
        });
    }
});*/


//mostra e ocultar icones de rede social, não ta funcionando para ipad, ver
$ (function () {
    var contEvent = 0;
    $(".navbar-toggler").click( function() {
        if($(".navbar-taggler").on()){
            contEvent = contEvent + 1;
            if(contEvent == 3){
                contEvent = 1;
            }if(contEvent == 1){
                $('.display-control').css("display", "none");
            }if(contEvent == 2){
                $('.display-control').css("display", "block");
            }
        }      
    });
});

$(function(){
    var tamanhoJanela = $(window).width();
    if (tamanhoJanela >= 768 && tamanhoJanela <= 1024) {
        $(".remove").remove();
    }
});;

//validars
$(function(){
    $(".photo").mouseenter(function(){
        $(".photo").css("width", "130%");
    });
    $(".photo").mouseleave(function(){
        $(".photo").css("width", "100%");
    })
    $(".photo1").mouseenter(function(){
        $(".photo1").css("width", "126%");
    });
    $(".photo1").mouseleave(function(){
        $(".photo1").css("width", "96%");
    })
});



