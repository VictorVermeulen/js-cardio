// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
	return str.split('').reduce((revString, char) => char + revString);
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
	return str === str.split('').reduce((a, b) => b + a);
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
	return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
	const charMap = {};

	let count = 0;
	let character = '';

	str.split('').forEach(function (char) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});

	for (const key in charMap) {
		if (charMap[key] > count) {
			count = charMap[key];
			character = key;
		}
	}

	console.log(character);
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
	let i = 1;

	while (i < 100) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(i + ' FizzBuzz');
		} else if (i % 3 === 0) {
			console.log(i + ' Fizz');
		} else if (i % 5 === 0) {
			console.log(i + 'Buzz');
		}
		i++;
	}
}

// Call Function
const output = fizzBuzz();

console.log(output);
