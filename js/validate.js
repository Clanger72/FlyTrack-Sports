//loader da logo para entrar 30s depois de carregar a página
//setTimeout(function(){
  //  document.getElementById('logo-load').classList.remove('hide');
   //}, 5000);

$(function(){
    var tamanhoJanela = $(window).width();
    if (tamanhoJanela > 1025) {   
        $(document).ready(function(){
            $(window).scroll(function () {
                var div_heigh = $(".clouse-menu").height(); // pega a altura da div
                var win_heigh = window.innerHeight; // pega a altura da janela
                var win_scrol = $(this).scrollTop(); // pega o valor da rolagem da janela
                var div_topo  = $(".clouse-menu").offset().top; // distância da div até o início do documento
                var distancia = div_topo - win_scrol - win_heigh; // distância da div até a borda inferior da janela
                if (win_scrol > 50) {
                    $('.nav-ocult').css("position", "fixed");
                    $('.nav-ocult').css("display", "block");
                    $('.nav-ocult').css("backgroundImage", "linear-gradient(130deg, #fe00005d, #e6a856d5 89%)");
                    $('.nav-ocult').css("width", "100%");
                    if(distancia <= -div_heigh){
                        $('.nav-ocult').css("display", "none");
                    }
                }
                else {
                    $('.nav-ocult').css("display", "none");
                }
            });
            $('.nav-ocult').css("display", "none");
        });
    }
    else{
        $('.nav-ocult').remove().addClass('.display-control');
    }
});

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