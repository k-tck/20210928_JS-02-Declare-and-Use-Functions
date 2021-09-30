// https://github.com/generation-org/JS/tree/master/JS-02%20-%20Declare%20and%20Use%20Functions
// PLEASE open in Node.js https://replit.com/languages/javascript

// Part3_part 2
// A student has an excellent grade if they score higher 
// than 8. Add on to your function to print out "Excellent" 
// for scores greater than 8.

// Part3_part 2 & 3
// A student has an excellent grade if they score higher 
// than 8. Add on to your function to print out "Excellent" 
// for scores greater than 8.
// A student has a perfect grade if their score is 11. 
// Add on to your function to print out "Perfect" for 
// a score of 11.

const passFail = (score) => {
	if (score >= 0 && score <= 4) {
		return "Fail";
	} 
	if (score >=5 && score <= 7) {
		return "Pass";
	}
		if (score >=8 && score <= 10) {
		return "Excellent";
	}
		if (score === 11) {
		return "Perfect";
	}		
	else {
		return "Score not available";
	}		
}

console.log(passFail(12));

