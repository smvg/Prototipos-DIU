function crearMapa(plazas) {
    var contador;

    for (contador = 1; contador <= plazas; contador++) {
        var square = document.createElement("div");
        square.style.cssText = "display: inline-block;margin: 0.2rem; padding: 0.2rem; font-size: 2rem; border: 1px solid black; width: 4rem; height: 4rem; text-align: center"
        square.innerHTML = contador;
        square.classList.add("rounded")
        $('#mapa').append(square)
        if (contador % 10 == 0) $('#mapa').append("<br>")
        if (contador % 20 == 0) $('#mapa').append("<br>")
    }
}

function crearMapa(plazas, seleccionadas) {
    var contador;

    for (contador = 1; contador <= plazas; contador++) {
        
        var square = document.createElement("div");
        cssText = "display: inline-block;margin: 0.2rem; padding: 0.2rem; font-size: 2rem; border: 1px solid black; width: 4rem; height: 4rem; text-align: center;"
        for (c in seleccionadas) {
            if (seleccionadas[c].id === contador) {
                cssText += "background-color: " + seleccionadas[c].color
                break
            }
        }
        square.style.cssText = cssText
        square.innerHTML = contador;
        square.classList.add("rounded")
        $('#mapa').append(square)
        if (contador % 10 == 0) $('#mapa').append("<br>")
        if (contador % 20 == 0) $('#mapa').append("<br>")
    }
}