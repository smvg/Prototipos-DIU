$('#btn-pagar').click(function() {

    if ($('.posTarjetas input:radio:checked').length !== 1) {
        alert("No se ha seleccionado ninguna tarjeta para pagar!")
    }
    else {
        alert("El pago se ha efectuado correctamente :)")
    }

});