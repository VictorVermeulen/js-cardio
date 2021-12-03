// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...args) {
	return args.reduce((a, b) => a + b);
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(a) {
	sum = 0;
	i = 2;

	while (i <= a) {
		//check if prime
		if (i === 2) {
			sum += i;
		} else {
			let test = '';

			for (var x = 2; x < i; x++) {
				if (i % x === 0) {
					test = false;
					break;
				} else {
					test = true;
				}
			}

			if (test === true) {
				console.log(i);
				sum += i;
			}
		}

		i++;
	}

	return sum;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...args) {
	let newArray = [];
	arr.forEach(function (yolo) {
		if (args.includes(yolo)) {
			return;
		} else newArray.push(yolo);
	});
	return newArray;

	//filter method would have looked nicer here, see the docs
	// return arr.filter((val) => !args.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
	//record indexes of trees
	let treeIndexArray = [];
	for (const test in arr) {
		if (arr[test] === -1) {
			treeIndexArray.push(parseInt(test));
		}
	}

	//create new array with non -1 values and sort them
	let peopleArray = [];
	for (const test in arr) {
		if (arr[test] != -1) {
			peopleArray.push(arr[test]);
		}
	}
	peopleArray.sort();

	//start planting people and trees, splice would have been nice for this to insert, see docs MDN
	let finalArray = [];
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (treeIndexArray.includes(i)) {
			finalArray.push(-1);
		} else {
			finalArray.push(peopleArray[j]);
			j++;
		}
	}

	return finalArray;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
	//loop over string, charAt, whatever
	let i = 0;

	while (i < str.length - 1) {
		if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
			return String.fromCharCode(str.charCodeAt(i) + 1);
		}

		i++;
	}
	return undefined;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
	let finalArray = [0, 0];
	arr.forEach((element) =>
		element % 2 === 0
			? (finalArray[0] = finalArray[0] + element)
			: (finalArray[1] = finalArray[1] + element)
	);

	return finalArray;
}

// Call Function

const output = evenOddSums([50, 60, 60, 45, 71]);

console.log(output);
