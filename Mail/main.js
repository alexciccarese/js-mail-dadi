/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

let emailList = ['lista1@example.com', 'lista2@example.com', 'lista3@example.com', 'lista4@example.com', 'lista5@example.com']
let userEmail = prompt('Inserisci qui la tua mail: es. name.s@gmail.com')
let findEmail = false

for (let i = 0; i < emailList.length; i++) {
  const lists = emailList[i];      

  if (userEmail === lists) {
    findEmail = true
  alert('Accesso consentito!')
  break
  }
} 

if (findEmail !== true){
  alert('Accesso negato')

}

console.log(findEmail);
