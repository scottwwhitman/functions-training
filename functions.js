// TODO: add your solutions here!

//Function #1

function combineWords(word1, word2) {
    return word1.concat(word2);
}

var result = combineWords('dog', 'house');
console.log(result);


//Function #2

function repeatPhrase(phrase, n) {
    for(var i = 0; i < n; i++) {
        console.log(phrase);
    }
    return phrase
}

repeatPhrase("Hello", 5);


//Function #3

function toTheNthPower(number, power) {
    var start = number;
    for ( i = 0; i < power - 1; i++) {
        start = start * number;
    }
    return start;
}

var result = toTheNthPower(4, 5);
console.log(result);


//Function #4

function areaOfACircle(radius) {
    return Math.PI * (radius * radius);
}

var result = areaOfACircle(2);
console.log(result);


//Function #5

function pythagoreanTheorem(a, b) {
    return Math.sqrt(a * a + b * b);
}

var result = pythagoreanTheorem(3, 4);
console.log(result);


//Function #6

function isXEvenlyDivisibleByY(x, y) {
    return x%y === 0
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);


//Function #7

function countVowels(word) {
    var vowelsCount = 0;
    for ( i = 0; i < word.length; i++) {
        if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u" || word.charAt(i) == "y" || word.charAt(i) == "A" || word.charAt(i) == "E" || word.charAt(i) == "I" || word.charAt(i) == "O" || word.charAt(i) == "U" || word.charAt(i) == "Y")
            vowelsCount += 1;
    }
    return vowelsCount
}

var result = countVowels("stealing");
console.log(result);


//Function #8

var myArray = [9,'Bart Simpson', true, 'wdi'];

function findWdi(arr, array) {
    return array.indexOf(arr) > -1;
}

var result = findWdi('wdi', myArray);
console.log(result);


//Function #9

function printTriangle(length) {
    var asterisk = "*"
    var printAsterisk = asterisk
    for ( i = 0; i < length; i++) {
        console.log(printAsterisk);
        var printAsterisk = printAsterisk.concat(asterisk);
    }
}

printTriangle(5);


//Function #10

function printPyramid(length) {
    var asterisk = "*"
    var space = " "
    var start = ""
    var startLength = length - 1
    var end = ""
    var endLength = 1
    var combined = ""

    for ( var i = 0; i < length; i++) {
        for ( var s = 0; s < startLength; s++) {
            start = start.concat(space);
        }
        for ( var e = 0; e < endLength; e++) {
            end = end.concat(asterisk, space);
        }
        combined = start.concat(end);
        console.log(combined);
        start = "";
        startLength --;
        end = "";
        endLength ++;
        combined = "";
    }
}

printPyramid(10);
