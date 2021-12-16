function palindrome(str){
    //str deve accettare maiuscolo e minuscolo
    //in replace per rimuovere caratteri indesiderati
   str = str.toLowerCase().replace(/\W/ , '');
   //dichiarato variabile len che sta per lunghezza della stringa
   let len = str.length;
   //ciclo for  dove i deve essere minore di lunghezza stringa diviso 2
   //i palindromi solitamnete hanno caratteri pari :D
   for(let i = 0 ; i < len/2 ; i++){
       //se indice striga è diverso da stringa inverse [len -1 -i]
       //ritorna falso
       if(str[i] !== str[len - 1 - i]){
           return false;
       }
   }
   //se entrambi sono uguali ritornerà vero
   return true;
}
let userWord = prompt('inserisci la tua parola');
userWord = palindrome(userWord);
console.log(userWord);
