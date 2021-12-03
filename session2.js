// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
	// SOLUTION 1 - Return a single longest word
	// let wordsArray = sen.replace(/,/g, '').split(' ');

	// let length = 0;
	// let selectedWord = '';

	// wordsArray.forEach(function (word) {
	// 	if (word.length > length) {
	// 		length = word.length;
	// 		selectedWord = word;
	// 	}
	// });

	// console.log(selectedWord);

	// SOLUTION 2 - Return an array and include multiple words if they have the same length
	let wordsArray = sen.replace(/,/g, '').split(' ');

	let length = 0;
	let selectedWords = [];

	wordsArray.forEach(function (word) {
		if (word.length >= length) {
			length = word.length;
			selectedWords.push(word);
		}
	});

	// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
	if (selectedWords.length === 1) {
		return selectedWords[0];
	} else return selectedWords;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
	let newArray = [];

	let i = 0;

	while (i < arr.length) {
		newArray.push(arr.slice(i, i + len));
		i = i + len;
	}

	return newArray;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
	let finalArray = [];

	//loop over arrays and push the values to finalArray
	arrays.forEach((e) => e.forEach((i) => finalArray.push(i)));

	return finalArray;
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
	//strip them of all non letters, to lowercase
	str1 = str1
		.replace(/[^a-z]/gi, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');
	str2 = str2
		.replace(/[^a-z]/gi, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');

	console.log(str1, str2);

	return str1 == str2 ? 'true' : 'false';

	//https://masteringjs.io/tutorials/fundamentals/compare-arrays
	//we need join since array checking if they are equal is going to fail.

	//turn into array, sort them, join back together, see if the same

	//create 2 arrays of arrays with key and value pairs, sort them, see if equal
	//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
	//https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
	const alpha = Array.from(Array(26)).map((e, i) => i + 97);
	const alphabet = alpha.map((x) => String.fromCharCode(x));
	const vowels = ['a', 'i', 'e', 'o', 'u'];

	let strSplit = str.split('');

	let newString = '';

	strSplit.forEach(function (letter) {
		let char = '';

		if (alphabet.includes(letter)) {
			if (alphabet.indexOf(letter) === 25) {
				char = alphabet[0];
			} else {
				char = alphabet[alphabet.indexOf(letter) + 1];
			}

			if (vowels.includes(char)) {
				char = char.toUpperCase();
			}

			newString = newString.concat(char);
		} else {
			newString = newString.concat(letter);
		}
	});
	console.log(newString);
}

// Call Function
const output = letterChanges('hello there');

console.log(output);
