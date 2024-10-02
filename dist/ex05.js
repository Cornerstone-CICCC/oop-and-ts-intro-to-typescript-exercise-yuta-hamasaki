"use strict";
// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function countVowels(word) {
    const words = word.split('');
    const vowelCounter = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "a" || words[i] === "e" || words[i] === "i" || words[i] === "o" || words[i] === "u") {
            vowelCounter.push(words[i]);
        }
    }
    return vowelCounter.length;
}
// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
