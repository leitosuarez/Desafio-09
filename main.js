import './style.css'

// ejercicio a)
console.log('EJERCICIO A)' + '-'.repeat(40))
let cantidadDeGatos = 10;

for (let i = 0; i < cantidadDeGatos; i++) {
    if (i === 0 || i === 3 || i === 6 || i === 9) {
        console.log(`Gato #${i+1} 😹`)
    }
    if (i === 1 || i === 4 || i === 7 || i === 10) {
        console.log(`Gato #${i+1} 😸`)
    }
    if (i === 2 || i === 5 || i === 8 ) {
        console.log(`Gato #${i+1} 😺`)
    }
}

// ejercicio b)
console.log('EJERCICIO B)' + '-'.repeat(40))
let cantidadDeGatosB = prompt('ingrese la cantidad de gatos que quiere ver');
let cantidadDePasos = prompt('ingrese la cantidad de patitas que quiere ver');

for (let i = 0; i < cantidadDeGatosB; i++) {
    console.log(`Gato #${i+1} 🐈 ` + "🐾".repeat(cantidadDePasos))
}


// ejercicio c)
console.log('EJERCICIO C)' + '-'.repeat(40))
let cantidadDeGatosC = prompt('ingrese la cantidad de gatos que quiere ver');
let cantidadDePasosC = prompt('ingrese la cantidad de patitas que quiere ver');

for (let i = 0; i < cantidadDeGatosC; i++) {
    if (i % 2 != 0 ) {
        console.log(`Gato #${i+1} 🐈 🐈` + "🐾".repeat(cantidadDePasosC)) 

    } else {
        console.log(`Gato #${i+1} 🐈 ` + "🐾".repeat(cantidadDePasosC))
    }      
}
