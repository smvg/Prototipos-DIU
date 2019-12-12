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

  $('.ayuda-minusvalido').hover(function(){
    $('.contenedor-ayuda-minusvalido').addClass('visible');
  }, function(){
    $('.contenedor-ayuda-minusvalido').removeClass('visible');
  });

  $("#btn-cancelar").click(function () {
    window.location.href = "ajustes.html"
  });

  $('.floating-notification').click(function () {
    window.location.href = "notificaciones.html";
  });

  $('#btn-guardar').click(function () {
    var dni = document.getElementById('dni').value;
    var telefono = document.getElementById('telefono').value;

    var numeros = dni.substring(0, 8)
    var letra = dni.substring(8, 9)

    if (dni.length !== 9 || !letra.match(/^[A-Za-z]+$/) || isNaN(numeros)) {
      $('#overlay-dni').addClass("active");
      return;
    }
    
    if (isNaN(telefono)) {
      $('#overlay-tel').addClass("active");
      return;
    }

    alert("Los datos se han guardado correctamente :)")

  });

  $('.btn-rechazar').click(function() {
    $('#overlay-tel').removeClass("active");
    $('#overlay-dni').removeClass("active");
  });

  $('.btn-cerrar-popup').click(function() {
    $('#overlay-tel').removeClass("active");
    $('#overlay-dni').removeClass("active");
  });