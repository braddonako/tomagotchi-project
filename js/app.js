console.log('JavaScript locked and loaded baby');

class tomagotchi {
		constructor (Hunger, sleepiness, boredom, age){
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}
}

const Steven = new tomagotchi('0', '0', '0', '0');

const gamePlay =  {
	hunger: 0, // hungry goes up every 4
	sleepiness: 0, // Every 7 seconds this will go up a point
	boredom: 0,	// this will go up faster - goes up every one second
	increaseHunger(){ // This is going to set an interval that will run up to 10
		// once the hunger hits 10, the tomagotchi will die. -- I will have to create a function for the button that 
		// will feed the alligator, and will reduce the point by one when clicked

		const interval = setInterval(() => {
			$('#hunger').text(gamePlay.hunger++);
			if (gamePlay.hunger === 10){
			clearInterval(interval);	
			};

		}, 1000) //run for each second
	},

//---------------------------------------------------------------------------------------------
// $(document).ready(function () {
//     var number = parseInt($('#test').text(), 10) || 0; // Get the number from paragraph


//     // Called the function in each second
//     var interval = setInterval(function () {
//         $('#test').text(number++); // Update the value in paragraph

//         if (number > 1000) {
//             clearInterval(interval); // If exceeded 100, clear interval
//         }
//     }, 1000); // Run for each second
// });

//---------------------------------------------------------------------------------------------
	increaseSleepiness(){
		//This method will run the same as check hunger. We will set the interbal to go up every 7 seconds
		// If the interval hits 10, the tomigotchi will die


	},
	increaseBoredom() {
		//This method will run the same as checkHunger and checkSleepiness, but will run at a different interval
		//
	},
	increaseAge(){
		// I will have a interval that will increase my pets age every 1 minute. 
	},
	feedMe(){
  	// I will create an event listener, that when the feedme button is clicked, 
  	// It will reduce the hunger by one. 
  },
  turnOffLights(){
  	//The getSleep will have an event listener on the sleepiness button. 
  	// Each time this button is clicked, it will reduce the sleepiness by 1
  },
  iAmBored(){
  	// I will create an event listener, that when the bored button is clicked, it will reduce the boredom by 1
  }
}








