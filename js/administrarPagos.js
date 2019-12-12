var metodo;

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
$('.btn-aceptar').click(function() {
    metodo.remove();
    $('#overlay-quitar').removeClass('active');
  });

$('.btn-rechazar').click(function() {
  $('#overlay-quitar').removeClass('active');
});

$('.añadir').click(function(){
  window.location.href = "añadirFormaPago.html";
});

$('.modificar').click(function(){
  window.location.href = "modificarFormaPago.html";
});

$('.eliminar').click(function() {
  metodo = $(this).closest('.tarjeta');
  $('#overlay-quitar').addClass('active');
});

$('.floating-notification').click(function () {
  window.location.href = "notificaciones.html";
});