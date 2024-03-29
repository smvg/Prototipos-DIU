var tarjeta;

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
    tarjeta.remove();
    $('#overlay-quitar').removeClass('active');
  });

$('.btn-rechazar').click(function() {
  $('#overlay-quitar').removeClass('active');
});

$('.eliminar').click(function() {
    tarjeta = $(this).closest('.tarjeta');
    $('#overlay-quitar').addClass('active');
  });

$('.añadir').click(function(){
  window.location.href = "añadirVehiculo.html";
});

$('.ayuda-matricula').hover(function(){
  $('.contenedor-ayuda-matricula').addClass('visible');
}, function(){
  $('.contenedor-ayuda-matricula').removeClass('visible');
});

$('#btn-cancelar').click(function(){
  window.location.href = "vehiculos.html";
});

$('.editar').click(function(){
  window.location.href = "modificarVehiculo.html";
});

$('.floating-notification').click(function () {
  window.location.href = "notificaciones.html";
});