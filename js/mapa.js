function crearMapa(plazas) {
    var contador;

    // Creamos n plazas de divs
    for (contador = 1; contador <= plazas; contador++) {
        var square = document.createElement("div");
        square.style.cssText = "display: inline-block; margin: 0.2rem; padding: 0.2rem; font-size: 2rem; border: 1px solid black; width: 4rem; height: 4rem; text-align: center"
        square.innerHTML = contador;
        square.setAttribute("id", "plaza-" + contador);
        square.classList.add("rounded")
        square.classList.add("plaza")
        $('#mapa').append(square)
        // Si sobrepasamos el limite de fila hacemos salto de linea
        if (contador % 10 == 0) $('#mapa').append("<br>")
        if (contador % 20 == 0) $('#mapa').append("<br>")
    }
}

// Lo mismo que el anterior solo que añadimos colores
function crearMapa(plazas, seleccionadas) {
    var contador;

    for (contador = 1; contador <= plazas; contador++) {
        var square = document.createElement("div");
        cssText = "display: inline-block; margin: 0.2rem; padding: 0.2rem; font-size: 2rem; border: 1px solid black; width: 4rem; height: 4rem; text-align: center;"
        for (c in seleccionadas) {
            if (seleccionadas[c].id === contador) {
                cssText += "background-color: " + seleccionadas[c].color
                break
            }
        }
        square.style.cssText = cssText
        square.innerHTML = contador;
        square.setAttribute("id", "plaza-" + contador);
        square.classList.add("rounded")
        square.classList.add("plaza")
        $('#mapa').append(square)
        if (contador % 10 == 0) $('#mapa').append("<br>")
        if (contador % 20 == 0) $('#mapa').append("<br>")
    }
}