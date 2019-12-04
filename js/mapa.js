function crearMapaVacio(plazas, vehicles) {
    var contador, handicap, color_square;

    for (contador = 1; contador <= plazas; contador++) {
        var square = document.createElement("div");
        handicap = false
        cssText = "position: relative; display: inline-block; margin: 0.2rem; padding: 0.2rem; font-size: 2rem; border: 1px solid black; width: 4rem; height: 4rem; text-align: center;"
        color_square = "background-color: white"
        for (c in vehicles) {
            if (vehicles[c].id === contador) {
                handicap = vehicles[c].handicap
                color_square = "background-color: " + vehicles[c].color
                break
            }
        }
        square.style.cssText += cssText + color_square
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

// Lo mismo que el anterior solo que añadimos colores
function crearMapaRandom(plazas, vehicles) {
    var contador, handicap, color_square;
    var green = "rgb(144, 238, 144)";
    var gray = "rgb(211, 211, 211)";
    var blue = "rgb(173, 216, 230)";

    var colors = [green, gray, blue]

    for (contador = 1; contador <= plazas; contador++) {
        var square = document.createElement("div");
        handicap = (Math.floor(Math.random() * 10) > 8) ? true : false;
        cssText = "position: relative; display: inline-block; margin: 0.2rem; padding: 0.2rem; font-size: 2rem; border: 1px solid black; width: 4rem; height: 4rem; text-align: center;"
        color_square = "background-color: " + colors[Math.floor(Math.random()*colors.length)]
        for (c in vehicles) {
            if (vehicles[c].id === contador) {
                handicap = vehicles[c].handicap
                color_square = "background-color: " + vehicles[c].color
                break
            }
        }
        square.style.cssText += cssText + color_square
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