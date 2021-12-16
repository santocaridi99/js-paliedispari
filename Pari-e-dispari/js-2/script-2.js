//dichiaro variabili prompt che sarebbero le scelte dell'utente
const userChoice = prompt('pari o dispari');
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
//dichiaro una funzione random che ci servirà in caso di numeri random
function randomNumber(min,max){
    let random = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return random;
}
//controllo se nel prompt di prima l' utente abbia inserito un numero coerente con il gioco
for (let i = 0 ; i < userNumber ; i++){
    if(userNumber<1 || userNumber>5){
        console.log('attenzione hai selezionato un numero non compreso tra 1 e 5')
    }
}
console.log(userNumber);
//numero randomico generato dalla macchina
let manchineNumber = randomNumber(1 , 5);
console.log(manchineNumber);
//somma dei due numeri
let total = userNumber + manchineNumber;
console.log(total);
//vedere chi ha vinto
if(userChoice.toLowerCase() != "pari" && userChoice.toLowerCase() != "dispari"){
    console.log('attenzione non hai dato una scelta')
}else if(total % 2 === 0 && userChoice.toLowerCase()==='pari'){
    console.log('utente ha vinto');

}else if(total % 2 !=0 && userChoice.toLowerCase()==='dispari'){
    console.log('utente ha vinto')

}else{
    console.log('il computer ha vinto')
}



