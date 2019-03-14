
// cycle images in the following order: CHERRY --> LEMON --> ORANGE
a = document.getElementById('slot1');
b = document.getElementById('slot2');
c = document.getElementById('slot3');
var jp = document.getElementById('you-win');

function nextImageOne(el){
	if (el.src.match("cherry_slot.PNG")){
		el.src = "lemon_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("lemon_slot.PNG")){
		el.src = "orange_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("orange_slot.PNG")){
		el.src = "cherry_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}

function checkCherries(el) {
	if (a.src.match('cherry_slot.PNG') && b.src.match('cherry_slot.PNG') && c.src.match('cherry_slot.PNG')){
		jp.play();
		console.log("Jackpot!");
		a.classList.add('opaque')
		b.classList.add('opaque')
		c.classList.add('opaque')
		alert("Jackpot!!!!")
	} else if (a.src.match('lemon_slot.PNG') && b.src.match('lemon_slot.PNG') && c.src.match('lemon_slot.PNG')){
		jp.play();
		console.log("Jackpot!");
		a.classList.add('opaque')
		b.classList.add('opaque')
		c.classList.add('opaque')
		alert("Jackpot!!!!")
	} else if (a.src.match('orange_slot.PNG') && b.src.match('orange_slot.PNG') && c.src.match('orange_slot.PNG')){
		jp.play();
		console.log("Jackpot!");
		a.classList.add('opaque')
		b.classList.add('opaque')
		c.classList.add('opaque')
		alert("Jackpot!!!!")
	} else {
		//Do Nothing
	}
}

function playSound() {
	// when the JACKPOT! button is clicked, play the slot machine sound
	document.getElementById('you-win').play();
}

