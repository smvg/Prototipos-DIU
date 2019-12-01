jQuery(function ($) {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(".page-wrapper").removeClass("toggled");
    }
  
    $(".sidebar-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
  
    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  
  });


$('.ayuda-numero').hover(function(){
    $('.contenedor-ayuda-numero').addClass('visible');
}, function(){
    $('.contenedor-ayuda-numero').removeClass('visible');
});

$('.ayuda-cvv').hover(function(){
    $('.contenedor-ayuda-cvv').addClass('visible');
}, function(){
    $('.contenedor-ayuda-cvv').removeClass('visible');
});

$('.ayuda-caducidad').hover(function(){
    $('.contenedor-ayuda-caducidad').addClass('visible');
}, function(){
    $('.contenedor-ayuda-caducidad').removeClass('visible');
});