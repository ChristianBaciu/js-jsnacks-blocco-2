const attivaHtml = document.getElementById("attiva")
attivaHtml.addEventListener('click', function(){

    let cicli = 5;

    for (let i = 0; i < cicli; i++){

        let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 10"))
    
        if(numeroUtente % 2 === 0){
            console.log(`il numero è pari: ${numeroUtente}`)
        }else{
            console.log(`il numero è disapi: ${numeroUtente + 1}`)
        }
    }
    
})
