// https://github.com/generation-org/JS/tree/master/JS-02%20-%20Declare%20and%20Use%20Functions
// PLEASE open in Node.js https://replit.com/languages/javascript

// Exercise #1
// Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 
// 	0.1% (0.01) interest fee. Can you help her calculate her costs?
// Return the value of what she should be paying.

// Method1
const totalCost = (cost) => {
	const modified = (cost * 1.01) + 3;
	return modified;
};
console.log("The total cost: ", totalCost(8));

// Method2
const nextTotal = (input) => (input*1.01)+3;
console.log("The next total cost:", nextTotal(8));


// Exercise #2
// Part 1
// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends 
// saying: Welcome {name1}, {name2}, {name3}.

// Method 1 - template literal
const friendName1 = (A,B,C) => {
	// return A +","+ B +","+ C;
	return `${A}, ${B}, ${C}`
}

// Method 2
const friendName2 = (A,B,C) => `${C}, ${B}, ${A}`

console.log("Welcome", friendName1("Tom", "Dick", "Mary"));
console.log("Welcome", friendName2("Tom", "Dick", "Mary"));


// Exercise #2
// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.
// i.e. 1990 returns 30

// Method1
const birthYear = (year) => {
	return 2021 - year;
}
console.log("Age:", birthYear(1990));

// Method2 - Implicit return
const birthyear = (YOB) => 2021 - YOB;

console.log("Your age is", birthyear(1976));


// Exercise #2
// Part 3
// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, 
// you are {age2}. Welcome {name3}, you are {age3}.

const tom ={
	name: "Tom",
	age: 49
}

const jane ={
	name: "Jane",
	age: 34
}

const susie ={
	name: "Susie",
	age: 23
}

const nameAndAge = (fd1,fd2,fd3) => 
	`Welcome ${fd1.name}, you are ${fd1.age}. Welcome ${fd2.name}, 
	you are ${fd2.age}. Welcome ${fd3.name}, you are ${fd3.age}`

console.log(nameAndAge(tom,jane,susie));
