$('#btn-pagar').click(function() {

    if ($('.contenido input:radio:checked').length !== 1) {
        $('#overlay-seleccionar').addClass("active");
    }
    else {
        $('#overlay-pagado').addClass("active");
    }

});

$('.btn-rechazar').click(function() {
    $('#overlay-seleccionar').removeClass("active");
    $('#overlay-pagado').removeClass("active");
});

$('.success').click(function() {
    window.location.href = "index.html";
});

$('#icono-add').click(function() {
    window.location.href = "añadirFormaPago.html";
});

