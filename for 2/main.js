const attivaHtml = document.getElementById("attiva")
attivaHtml.addEventListener('click', function() {

    let primoArray = [1, 2, 3, 4, 5]
    
    let secondoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    let arrayMinore;

    if(primoArray.lenght > secondoArray.lenght){
        arrayMinore = array2
    }else if(primoArray.lenght < secondoArray.lenght){
        arrayMinore = primoArray
    }
    
    function RandomNumber(min,max){
        return Math.floor(Math.random()*(max-min + 1) + min)
    }

    for(let i = 0; primoArray.lenght !== secondoArray.lenght; i++){
        let inserisciNumero = RandomNumber( 1,100 )

        arrayMinore.push( inserisciNumero )
    }

    console.log(primoArray, secondoArray)

})
