
let userName = document.getElementById('user-name-input');
let travelDistance = document.getElementById('travel-distance-input');
let userAge = document.getElementById('user-age-range');


let createTicketBtn = document.getElementById('btn-create');
createTicketBtn.addEventListener('click', 
function(){
	const basePrice = travelDistance.value * 0.27;
	console.log('prezzo base del biglietto : € ' + basePrice);
	let finalPrice = basePrice;
	if (userAge.value === "Minorenne") {
		finalPrice *= 0.83;
		console.log('l\'utente è minorenne, pertanto ha diritto ad uno sconto del 17% ed il prezzo scontato è € ' + finalPrice);
	}	else if ( userAge.value === "Over 65") {
		finalPrice *= 0.67;
		console.log('l\'utente è over 65, pertanto ha diritto ad uno sconto del 33% ed il prezzo scontato è € ' + finalPrice);
	} else if (userAge.value === "Maggiorenne") {
			console.log('l\'utente non ha diritto ad uno sconto');
	} else {
		console.log('l\'utente non ha selezionato una fascia d\'età')
	}

	document.getElementById('ticket').classList.remove('d-none');
	travelDistance = document.getElementById('travel-distance-input');
	document.querySelector('p#ticket-price').innerHTML = finalPrice.toFixed(2) + '€';
	document.querySelector('section#ticket div.name p').innerHTML = userName.value;
	let message =  `Ciao ${userName.value}, 
	il prezzo del biglietto è di € ${finalPrice.toFixed(2)}
	per un tragitto di ${travelDistance.value}km.`
	document.getElementById('message').innerHTML = message;
})



let undoBtn = document.getElementById('btn-undo');
undoBtn.addEventListener('click', 
function(){
	document.getElementById('ticket').classList.add('d-none');
	document.getElementById('user-form').reset();
	document.querySelector('p#ticket-price').innerHTML = "";	
	message= "";
})
