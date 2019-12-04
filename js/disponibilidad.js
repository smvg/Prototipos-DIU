vehiculos = []

for (var x = 0; x < 50; x++) {
    vehiculos.push({id: x, color:  'lightgray', handicap: false})
}

for (var x = 0; x < 40; x++) {
    vehiculos.push({id: 50+x, color:  'lightgreen', handicap: false})
}

for (var x = 0; x < 5; x++) {
    vehiculos.push({id: 90+x, color:  'lightgreen', handicap: false})
}

for (var x = 0; x < 5; x++) {
    vehiculos.push({id: 95+x, color:  'lightblue', handicap: true})
}
/*vehiculos = [{id: 3, color:  'lightgray'},{id: 54, color: 'lightgray'}]*/

crearMapa(vehiculos);