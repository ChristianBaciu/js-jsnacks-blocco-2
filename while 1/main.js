let numeriArray = [ ];
let somma = 0;

const attivaHtml = document.getElementById( "attiva" )
attivaHtml.addEventListener('click', function() {

    while (somma < 50) {
        let input = parseFloat (prompt("Inserisci un numero:", "25"));

        let numero = input;

        if (numero){
            numeriArray.push(numero);
            somma += numero;
        }
    }
    console.log("Somma degli elementi:", somma);
    
})

