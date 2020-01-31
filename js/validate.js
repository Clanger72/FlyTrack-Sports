//Menu Sidebar
$(window).resize(function() {
    var tamanhoJanela = $(window).width();
    if (tamanhoJanela < 800) { 
        $(".nav-link-img").css("left", "5%");
        $(".nav-link-img").css("top", "99.5%");
        $(".nav-link-img1").css("left", "15%");
        $(".nav-link-img1").css("top", "100%");
        $(".intro-img-local").remove();
        $(".intro-img-local1").remove();
        $(".intro-img-whats").remove();
        $(".intro-img-fone").remove();
        $(".nav-link-img-2").remove();
        $(".nav-link-img-3").remove();
    } else {
        $(".nav-link-img").css("left", "90%");
        $(".nav-link-img").css("top", "30%");
        $(".nav-link-img1").css("left", "95%");
        $(".nav-link-img1").css("top", "30%");
    }
});

$(function(){
    var tamanhoJanela = $(window).width();
    if (tamanhoJanela >= 768 && tamanhoJanela <= 1024) {
        $(".remove").remove();
        $('.nav-link-img').remove();
        $(".nav-link-img1").remove();
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



