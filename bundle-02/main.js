/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// è una funzione che verifica se hai più o meno di 18 anni, in base all'età ti dice una cosa o un'altra
// no
// si, non si può usare una const se poi in base ad una variabile deve cambiare il valore di questa const. Serve una variabile let

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// è una funzione che analizza il numero di colori presenti nell'array "colors" per scrivere il numero all'interno della frase in console
// si, length e non lenght :)
// no

// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// è una funzione che somma il numero che inserisci l'utente e ti stampa il risultato
// no
// si, non si può usare solo prompt, perchè se no js prende ciò che scriviamo come stringa e lo concatena a 12, serve il parseInt per dire a js che è un intero

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// è una funzione che verifica se è presente l'email che inserisci è presente all'interno dell'array e in base alla presenza dà un messaggio
// si, false e true (valori booleani) non vanno messi tra virgolette come se fossero stringhe
// no

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];
            
        if (userEmail.length > 5) {
                
            if (email === userEmail) {
            grantAccess = 'true';            
                
            }
            
        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
checkAccessImproved();

// è una funzione che verifica se è presente l'email che inserisci è presente all'interno dell'array e in base alla presenza dà un messaggio
// si, mancava la chiusura della parentesi aperta all'inizio della funzione
// no












