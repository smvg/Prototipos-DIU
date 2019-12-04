vehiculos = [{id: 3, color:  'lightgray'},{id: 54, color: 'lightgray'}]

crearMapa(100, vehiculos);

$('.plaza').click(function() {

    // Cogemos id del div por si lo utilizamos
    var id = $(this).attr('id').split('-')[1]

    // Si es de los que no puede seleccionar nos salimos
    if ($(this).css("background-color") === 'rgb(211, 211, 211)') return;

    // Si es azul (seleccionado) lo cambiamos
    if ($(this).css("background-color") === 'rgb(173, 216, 230)') {
        $(this).css("background-color",  "white");
        document.getElementById("plaza-confirmacion-" + id).remove();

        // Si no quedan plazas seleccionadas ponemos aviso
        if ($('.plaza-confirmacion').length === 0) {
            document.getElementById("nada-seleccionado").style.cssText = "display: inline-block"
        }
    }
    // Cambiamos el color si seleccionamos
    else {
        $(this).css("background-color",  "lightblue");
        // Quitamos el aviso, en caso de haberlo quitado lo hacemos de nuevo
        // No es lo ideal y se podria hacer mejor pero es un prototipo y la verdad
        // que no estoy yo para pensar mucho
        document.getElementById("nada-seleccionado").style.cssText = "display: none"
        $('.plazas-seleccionadas').append(
            '<div class="plaza-confirmacion rounded" id="plaza-confirmacion-' + id + '"> \
                <h4>Plaza #' + id + '</h4> \
                <hr> \
                Entrada &nbsp; <input type="time"><input type="date"> \
                <br><br> \
                Salida &nbsp; <input type="time"><input type="date"> \
            </div><br>'
        )
    }
})