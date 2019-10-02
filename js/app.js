console.log('JavaScript locked and loaded baby');

class Tomagotchi {
		constructor (Hunger, sleepiness, boredom, age){
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 1;
	}
	increaseHunger(){
		const interval = setInterval(() => {
			$('#hungerCount').text(this.hunger++);
			if (this.hunger === 11){
			clearInterval(interval);
			alert('Your tomigatchi has died from being too hungry. Please feed him next time');	
			};
		}, 4000) //run for each 7 seconds

	}
	increaseSleepiness(){
		//This method will run the same as check hunger. We will set the interbal to go up every 7 seconds
		// If the interval hits 10, the tomigotchi will die
	const interval = setInterval(() => {
			$('#sleepinessCount').text(this.sleepiness++);
			if (this.sleepiness === 11){
			clearInterval(interval);
			alert('Your tomigotchi has died from sleep deprivation. Next time, give him some nyquil');	
			};
		}, 7000) //run for each seven second

	}
	increaseBoredom() {
		//This method will run the same as checkHunger and checkSleepiness, but will run at a different interval
		const interval = setInterval(() => {
			$('#boredomCount').text(this.boredom++);
			if (this.boredom === 11){
			clearInterval(interval);
			alert('Your tomigotchi has died from being bored. You are a terrible owner.');	
			};
		}, 2000) //run for each seven second
	}
	increaseAge(){
		// I will have a interval that will increase my pets age every 15 seconds.
		const interval = setInterval(() => {
			$('#ageCount').text(this.age++);
			if (this.age === 11){
			clearInterval(interval);
			alert('Your tomigotchi has died from sleep deprivation. Next time, give him some nyquil');	
			};
		}, 15000) //run for each seven second 
	}
	feedMe(){
  	// I will create an event listener, that when the feedme button is clicked, 
  	// It will reduce the hunger by one. 
  }
  turnOffLights(){
  	//The getSleep will have an event listener on the sleepiness button. 
  	// Each time this button is clicked, it will reduce the sleepiness by 1
  }
  iAmBored(){
  	// I will create an event listener, that when the bored button is clicked, it will reduce the boredom by 1
  }
}

const steve = new Tomagotchi();

// steve.increaseHunger();
// steve.increaseSleepiness();
// steve.increaseBoredom();
// steve.increaseAge();







