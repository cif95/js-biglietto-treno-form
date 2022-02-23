// creare un input form

// estrarre il valore inserito nell'input nome cognome
const userName = document.getElementById('user-name-input').value;
console.log(userName + ' : nome e cognome dell\'utente');


// estrarre il valore inserito nell'input km da percorrere
const travelDistance = document.getElementById('travel-distance-input').value;
console.log(travelDistance + ' : km da percorrere inseriti dall\'utente');

// estrarre il valore selezionato fra le options della select fascia d'età
let userAge = "";

document.getElementById('user-age-range').addEventListener('change', function() {
	userAge = this.value;
	console.log('fascia d\età dell\'utente : ' + userAge);
});

// determinare il prezzo base del biglietto
// associare al prezzo base la seguente condizione : 0.27 € / km
const basePrice = travelDistance * 0.27;
console.log('prezzo base del biglietto : € ' + basePrice);

// detrarre dal prezzo base il 17% nel caso in cui il passeggero è minorenne

let finalPrice = basePrice;

if (userAge = "Minorenne") {
	finalPrice *= 0.83;
	console.log('l\'utente è minorenne, pertanto ha diritto ad uno sconto del 17% ed il prezzo scontato è € ' + finalPrice);
} // detrarre dal prezzo base il 33% nel caso in cui il passeggero è over65 
	else if ( userAge == "over 65") {
	finalPrice *= 0.67;
	console.log('l\'utente è over 65, pertanto ha diritto ad uno sconto del 33% ed il prezzo scontato è € ' + finalPrice);
	} else {
		console.log('l\'utente non ha diritto ad uno sconto');
	}
	
// consegnare un output del prezzo finale, la cui cifrà avrà al massimo due numeri decimali

console.log('il prezzo finale è € ' + finalPrice);

// associare al button genera la creazione del ticket

let createTicketBtn = document.getElementById('btn-create');
createTicketBtn.addEventListener('click', 
function(){
console.log(finalPrice);
document.getElementById('ticket').classList.remove('d-none');
document.querySelector('p#ticket-price').innerHTML = finalPrice.toFixed(2) + '€';
document.querySelector('section#ticket div.name p').innerHTML = userName;
})


// associare al button cancella l'azzeramento di tutti i dati


let UndoBtn = document.getElementById('btn-undo');
UndoBtn.addEventListener('click', 
function(){
	document.getElementById('ticket').classList.add('d-none');
	document.getElementById('user-name-input').value = "";
	document.getElementById('travel-distance-input').value = "";
	document.getElementById('user-name-input').value = "";
	document.getElementById('travel-distance-input').value= "";
})
























// const userName = document.getElementById('user-name-input').value;
// console.log(userName);

// const travelKm = document.getElementById('travel-distance-input').value;

// const ticketPrice = travelKm * 0.27;

// const ageRangeBtn = document.getElementById('age-range');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// ageRangeBtn.addEventListener('click', 
// function(){
// 	dropdownMenu.classList.add('d-block');
// })


// let ageRange = "";

// const under18 = document.getElementById('under18');
// under18.addEventListener('click', 
// function(){
// 	ageRange ='Minorenne';
// 	dropdownMenu.classList.add('d-none');
// 	document.getElementById('age-range').innerHTML = ageRange;
// })

// const over18 = document.getElementById('over18');
// over18.addEventListener('click', 
// function(){
// 	ageRange ='Maggiorenne';
// 	dropdownMenu.classList.add('d-none');
// 	document.getElementById('age-range').innerHTML = ageRange;
// })

// const over65 = document.getElementById('over65');
// over65.addEventListener('click', 
// function(){
// 	ageRange = 'Over65';
// 	dropdownMenu.classList.add('d-none');
// 	document.getElementById('age-range').innerHTML = ageRange;
// })




// // if (ageRange == 'Minorenne'){
// //  	ticketPrice *= 0.83;
// // } else if (ageRange == 'Over65'){
// //  	ticketPrice *= 0.67;
// // } else {
// // 	console.log('l\'utente non ha diritto ad uno sconto');
// // }


// document.querySelector('p#ticket-price').innerHTML = ticketPrice.toFixed(2) + '€';






