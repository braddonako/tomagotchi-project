console.log('JavaScript locked and loaded baby');

class Tomagotchi {
		constructor (Hunger, sleepiness, boredom, age){
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
	}
	increaseHunger(){
		const interval = setInterval(() => {
			$('#hungerCount').text(this.hunger++);
			if (this.hunger === 11){
			clearInterval(interval);
			alert('Your tomigatchi has died from being too hungry. Please feed him next time');	
			};
		}, 3000) //run for each 7 seconds

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
		}, 5000) //run for each seven second

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
  	$('#feed').on('click', () => { 
  		console.log('button works');
  		this.hunger -= 1;
  	})
  }
  turnOffLights(){
  	//The getSleep will have an event listener on the sleepiness button. 
  	// Each time this button is clicked, it will reduce the sleepiness by 1
  		$('#turnLightsOff').on('click', () => { 
  		console.log('button works');
  		this.sleepiness -= 1;
  	})
  }
  iAmBored(){
  	// I will create an event listener, that when the bored button is clicked, it will reduce the boredom by 1
  		$('#bored').on('click', () => { 
  		console.log('button works');
  		this.boredom -= 1;

  	});
  }

//   }

//   $(document).ready(function(e) {
//     var width = $(document).width();

//     function goRight() {
//         $("#animate").animate({
//         left: width
//       }, 5000, function() {
//          setTimeout(goLeft, 50);
//       });
//     }
//     function goLeft() {
//         $("#animate").animate({
//         left: 0
//       }, 5000, function() {
//          setTimeout(goRight, 50);
//       });
//     }

//     setTimeout(goRight, 50);
// });

const steve = new Tomagotchi();

// steve.increaseHunger();
// steve.increaseSleepiness();
// steve.increaseBoredom();
// steve.increaseAge();
// steve.feedMe();
// steve.turnOffLights();
// steve.iAmBored();


 






