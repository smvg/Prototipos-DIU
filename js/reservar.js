vehiculos = [{id: 3, color:  'lightgray', handicap: false},{id: 54, color: 'lightgray', handicap: false}]

crearMapaRandom(100, vehiculos);

var green = "rgb(144, 238, 144)";
var gray = "rgb(211, 211, 211)";
var blue = "rgb(173, 216, 230)";
var orange = "rgb(255, 165, 0)";

$('.plaza').click(function() {
    
    // Cogemos id del div por si lo utilizamos
    var id = $(this).attr('id').split('-')[1]

    // Si es de los que no puede seleccionar nos salimos
    if ($(this).css("background-color") === gray || $(this).css("background-color") === blue) return;

    // Si es azul (seleccionado) lo cambiamos
    if ($(this).css("background-color") === orange) {
        $(this).css("background-color",  green);
        document.getElementById("plaza-confirmacion-" + id).remove();

        // Si no quedan plazas seleccionadas ponemos aviso
        if ($('.plaza-confirmacion').length === 0) {
            document.getElementById("nada-seleccionado").style.cssText = "display: inline-block"
        }
    }
    // Cambiamos el color si seleccionamos
    else {
        $(this).css("background-color",  orange);
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