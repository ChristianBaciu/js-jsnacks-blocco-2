const numeroCorretto = 3;

let numero = 0;

const attivaHtml = document.getElementById("attiva")
attivaHtml.addEventListener('click', function() {

    while(true){

        let input = prompt("Inserisci un numero tra 1 a 5:");
        // 
        numero = parseInt(input);

        // numero troppo alto o basso
        if(numero === numeroCorretto){
            alert("Hai indovinato il numero.")
            break; // break serve per fermarma il flusso se indovini il numero
        }else if(numero < numeroCorretto){
            alert("il numero è troppo basso")
        }else if(numero > numeroCorretto){
            alert("Il numero è troppo alto")
        }

    }
    console.log(numero)
})
