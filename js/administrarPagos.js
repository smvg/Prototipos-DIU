jQuery(function ($) {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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
$('.eliminar').click(function() {
    $(this).closest('.tarjeta').remove();
  });

$('.añadir').click(function(){
  window.location.href = "añadirFormaPago.html";
});

$('.modificar').click(function(){
  window.location.href = "modificarFormaPago.html";
});

$('.floating-notification').click(function () {
  window.location.href = "notificaciones.html";
});