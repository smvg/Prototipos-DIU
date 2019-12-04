

// Lo mismo que el anterior solo que añadimos colores
function crearMapaRelleno(plazas, vehicles) {
    var contador, handicap;

    for (contador = 1; contador <= plazas; contador++) {
        var square = document.createElement("div");
        handicap = false
        cssText = "position: relative; display: inline-block; margin: 0.2rem; padding: 0.2rem; font-size: 2rem; border: 1px solid black; width: 4rem; height: 4rem; text-align: center;"
        for (c in vehicles) {
            if (vehicles[c].id === contador) {
                handicap = vehicles[c].handicap
                cssText += "background-color: " + vehicles[c].color
                break
            }
        }
        square.style.cssText = cssText
        square.innerHTML = contador;
        if (handicap) {
            square.innerHTML += "\
                <i style='position: absolute; bottom: 5%; right: 5%; font-size: 15px' class='fas fa-wheelchair'></i>\
            ";
        }
        square.setAttribute("id", "plaza-" + contador);
        square.classList.add("rounded")
        square.classList.add("plaza")
        $('#mapa').append(square)
        if (contador % 10 == 0) $('#mapa').append("<br>")
        if (contador % 20 == 0) $('#mapa').append("<br>")
    }
}

function crearMapa(vehicles) {
    var contador;

    for (contador = 1; contador <= vehicles.length; contador++) {
        var square = document.createElement("div");
        var handicap = false
        cssText = "position: relative; display: inline-block; margin: 0.2rem; padding: 0.2rem; font-size: 2rem; border: 1px solid black; width: 4rem; height: 4rem; text-align: center;"

        handicap = vehicles[contador-1].handicap
        cssText += "background-color: " + vehicles[contador-1].color
        square.style.cssText = cssText
        square.innerHTML = contador;
        if (handicap) {
            square.innerHTML += "\
                <i style='position: absolute; bottom: 5%; right: 5%; font-size: 15px' class='fas fa-wheelchair'></i>\
            ";
        }
        square.setAttribute("id", "plaza-" + contador);
        square.classList.add("rounded")
        square.classList.add("plaza")
        $('#mapa').append(square)
        if (contador % 10 == 0) $('#mapa').append("<br>")
        if (contador % 20 == 0) $('#mapa').append("<br>")
    }
}