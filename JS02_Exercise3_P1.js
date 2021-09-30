// https://github.com/generation-org/JS/tree/master/JS-02%20-%20Declare%20and%20Use%20Functions
// PLEASE open in Node.js https://replit.com/languages/javascript

// Part3
// A teacher wants to create a rubric for grading. 
// The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or 
// equal to 5. Create a function that returns a boolean 
// true or false.

const passFail = (score) => {
	if (score >= 0 && score <= 4) {
		return false;
	} 
	else if (score >= 5 && score <=11) {
		return true;	
	}	
	else {
		return "Score not available";
	}		
}

console.log(passFail(12));


