

let userName = document.getElementById('user-name-input').value;
document.querySelector('section#ticket div.name p').innerHTML = userName;

let travelKm = document.getElementById('travel-distance-input').value;

let ticketPrice = travelKm*0.27;
console.log( ticketPrice);
document.querySelector('p#ticket-price').innerHTML = ticketPrice + '€';


let ageRange = document.getElementById('age-range');
console.log(ageRange);


let createBtn = document.getElementById('btn-create');
createBtn.addEventListener('click', 
function(){
	document.getElementById('ticket').classList.remove('d-none');
})


let UndoBtn = document.getElementById('btn-undo');
UndoBtn.addEventListener('click', 
function(){
	document.getElementById('ticket').classList.add('d-none');
	document.getElementById('user-name-input').value = "";
	document.getElementById('travel-distance-input').value= "";
})



// if (userAge < 18){
// 	ticketPrice *= 0.83;
// 	console.log(`l\'utente è minorenne,
// pertanto ha diritto ad uno sconto del 17%,
// questo è il prezzo del biglietto scontato: ${ticketPrice}`);
// } else if (userAge > 65){
// 	ticketPrice *= 0.67;
// 	console.log(`l\'utente ha più di 65 anni,
// pertanto ha diritto ad uno sconto del 33%,
// questo è il prezzo del biglietto scontato: ${ticketPrice}`);
// } else {
// 	console.log('l\'utente non ha diritto ad uno sconto');
// }