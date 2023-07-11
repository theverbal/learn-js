// generate random race number
let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;
let runnersAge = 20;
let adult = false;

// check if runner is adult
if (runnersAge > 18) {
	adult = true;
}
// check if the runner is an adult AND registered early
if (adult && earlyRegistration) {
	raceNumber = raceNumber + 1000;
}

// determine race time
if (adult && earlyRegistration) {
	console.log(`Attention early racer ${raceNumber}: you will race at 9:30 am.`);
} else if (adult && !earlyRegistration) { 
	console.log(`Attention late racer ${raceNumber}; you will race at 11:00 am.`);
} else if (!adult) {
	console.log(`Attention youth ${raceNumber}; you will race at 12:30 pm.`);
} else { 
	console.log('Go see the registration desk.');
}




