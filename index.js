// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(first, second) {
    return first - second;
}

console.log(calculateDifference(11, 3));



// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
    if(num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(5));



// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([12, 3, 7, 5, 9, 7]));



// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(arr) {
    const evenNumbers = [];
    
    for(let el of arr) {
        if(el % 2 == 0) {
            evenNumbers.push(el);
        }
    }
    return evenNumbers;
}

console.log(filterEvenNumbers([11, 3, 2, 5, -4, 8, 10, 9]));



// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
function sortArrayDescending(arr) {
    const sortedArray = arr.sort((a, b) => b - a)
    console.log(sortedArray);
}

sortArrayDescending([7, 3, 2, 5, -4, 11, 9]);



// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
function lowercaseFirstLetter(txt) {
    const firstLetter = txt[0].toLowerCase();
    const restOfLetter = txt.slice(1);
    const charachers = firstLetter + restOfLetter;
    return charachers;
}

console.log(lowercaseFirstLetter('DHAKA'));



// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
function countVowels(text) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for(el of text) {
        if(vowels.includes(el)) {
            count += 1;
        }
    }
    return count
}
console.log(countVowels('I am number four'));



// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
function findAverage(numbers) {
    let sum = 0;
    for(el of numbers) {
        sum += el;
    }

    let avg = sum / (numbers.length)
    return avg;
}

console.log(findAverage([4, 5, 7, 3, 1, 11, 2]));