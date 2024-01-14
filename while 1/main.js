let numeriArray = [ ];
let somma = 0;

const attivaHtml = document.getElementById( "attiva" )
attivaHtml.addEventListener('click', function() {

    while (somma < 50) {
        let input = prompt("Inserisci un numero:", "25");

        let numero = parseFloat(input);

        if (numero){
            numeriArray.push(numero);
            somma += numero;
        }
    }
    console.log("Somma degli elementi:", somma);
    
})

