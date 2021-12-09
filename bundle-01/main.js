/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// un ciclo for per 6 volte
// nessun errore di sintassi
// nessun errore logico


// ESERCIZIO 2
function addIfEven(num) {
    if (num & 2) {
        return num + 5;
    }
    return num;
}

// è una funzione che analizza "num" e qualora fosse pari, aggiunge 5 a "num"
// si, non bisogna aggiugnere = 0, ma === 0, perché il simbolo % verifica se è divisibile per X con resto 0, non il risultato = 0
// più o meno, era errato il significato di %. Avrebbe dovuto usare "/" per effettuare una divisione


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// è una funzione con un ciclo for al suo interno, che cicla i per 4 volte.
// si, all'interno delle parentesi del ciclo for, non vanno usate le virgole ma il punto e virgola.
// nessun errore logico


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// è una funzione che deve restituire solo i numeri pari presenti nell'array "numbers"
// si:
// c'è un ; di troppo nel ciclo for.
// lo stesso errore dell'esercizio 2 (x % 2 === 0)
// il punto e virgola dopo la parentesi dove è presente il modulo
// numbers.length - 1 è sbagliato, perché prenderebbe solo 7 elementi
// non si può verificare se un array è divisibile per 2, si può verificare se il suo indice lo è (numbers[i])
// no, non mi sembra ci sia un errore logico importante, forse solo quello dell'indice dell'array
