// the purpose of this application is to pull names for the family to do a Christmas gift exchange.

// HOW IT WORKS
// -User will log in to the application and press a button that says "draw a name"
// -Name will populate and that is who the user will buy a gift for
// -After a name is populated, it can no longer be in the rotation

// NAMES
// Fernette
// Jimmela
// Jazmyne
// Rakiah
// Lulu
// April
// Duke

// Names will be an array, and we will select a name by random number function that will correlate to the index of the name

const names = [
	'Fernette',
	'Jimmela',
	'Jazmyne',
	'Rakiah',
	'Lulu',
	'April',
	'Duke',
	'Buwana',
];

const userName = 'Jazmyne';
// console.log(names[1]);

// function for generating a random name based off of the number of names in the array

// const getRandomName = () => {
// 	min = Math.ceil(0);
// 	max = Math.floor(names.length);
// 	return names[Math.floor(Math.random() * (max - min) + 0)];
// };

// we have a function that generates a random name from the array, now, I want to pop out the names that have been generated from the function so that we dont get double names

const getRandomName = () => {
	min = Math.ceil(0);
	max = Math.floor(names.length);
	const randomNumber = Math.floor(Math.random() * (max - min) + 0);
	return randomNumber;
};

for (let i = 0; i < names.length; i++) {
	if (names[getRandomName()] == 'Jazmyne') {
		console.log('you cant pick yourself');
	} else {
		console.log('this works so far');
	}
}
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());
console.log(getRandomName());

// let randomName = getRandomNumber();

// console.log(randomName + ' this is the number');

// now we need to display the name based off of its index that correlates with the number from the function

// console.log(names[getRandomNumber()] + ' the number is ' + getRandomNumber());

// let familyMemberName = prompt('What is your name?');

// for (let i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// }

// OLD CODE!!!!!

// FUNCTION TO GENERATE RANDOM NAME
// const getRandomName = () => {
// 	min = Math.ceil(0);
// 	max = Math.floor(names.length);
// 	const randomName = names[Math.floor(Math.random() * (max - min) + 0)];
// 	return randomName;
// };

console.log(names.splice(getRandomName(), 1));
console.log(names);
console.log(names.splice(getRandomName(), 1));
console.log(names);
console.log(names.splice(getRandomName(), 1));
console.log(names);
console.log(names.splice(getRandomName(), 1));
console.log(names);

// While loop to run the process as long as there are names in the array. we need a user input (their name) and then we need to run the getRandomName function to generate a name on screen. That name represents who the user will buy a gift for. we need an if statement that says to run the function again if the getRandomName == user name. Once the name has been generated, we need to splice the name from the array so that we can continue 