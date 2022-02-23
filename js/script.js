
let userName = document.getElementById('user-name-input');
console.log(userName.value + ' : nome e cognome dell\'utente');
if  (!isNaN(userName.value)){
	console.log('Non hai inserito un valore valido');
} else {
	console.log('l\'utente ha inserito un valore valido');
}

let travelDistance = document.getElementById('travel-distance-input');
console.log(travelDistance.value + ' : km da percorrere inseriti dall\'utente');

if ((isNaN(travelDistance.value) || (travelDistance.value > 1000) || (travelDistance.value < 10))){
	console.log('Non hai inserito un valore valido, ne creo uno casuale');
	travelDistance.value = Math.floor(Math.random()*1000) + 10;
	console.log('il numero di km generato casualmente è ' + travelDistance.value)
} else {
	console.log('l\'utente ha inserito un numero valido');
}

let userAge = "";

document.getElementById('user-age-range').addEventListener('change', 
	function() {
		userAge = this.value;
		console.log('fascia d\età dell\'utente : ' + userAge);
});


const basePrice = travelDistance.value * 0.27;
console.log('prezzo base del biglietto : € ' + basePrice);


let finalPrice = basePrice;


let createTicketBtn = document.getElementById('btn-create');
createTicketBtn.addEventListener('click', 
function(){
	if (userAge === "Minorenne") {
		finalPrice *= 0.83;
		console.log('l\'utente è minorenne, pertanto ha diritto ad uno sconto del 17% ed il prezzo scontato è € ' + finalPrice);
	}	else if ( userAge === "Over 65") {
		finalPrice *= 0.67;
		console.log('l\'utente è over 65, pertanto ha diritto ad uno sconto del 33% ed il prezzo scontato è € ' + finalPrice);
	} else if (userAge === "Maggiorenne") {
			console.log('l\'utente non ha diritto ad uno sconto');
}
console.log(finalPrice);
document.getElementById('ticket').classList.remove('d-none');
document.querySelector('p#ticket-price').innerHTML = finalPrice.toFixed(2) + '€';
document.querySelector('section#ticket div.name p').innerHTML = userName.value;
})



let UndoBtn = document.getElementById('btn-undo');
UndoBtn.addEventListener('click', 
function(){
	document.getElementById('ticket').classList.add('d-none');
	document.getElementById('user-form').reset();
})
