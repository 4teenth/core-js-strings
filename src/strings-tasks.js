/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  if (value === null || value === undefined) return 0;
  return value.length;
}

/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  // return typeof value === 'string'; BUT, r function call: new String('test') - new created String object, it returns false.
  // This will work no matter what, even with explicit string objects:
  return Object.prototype.toString.call(value) === '[object String]';
}

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1 - The first string to concatenate.
 * @param {string} value2 - The second string to concatenate.
 * @return {string} - The concatenated string.
 *
 * @example
 *   concatenateStrings('aa', 'bb') => 'aabb'
 *   concatenateStrings('aa', '') => 'aa'.
 *   concatenateStrings('', 'bb') => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

/**
 * Returns the first character of the given string.
 *
 * @param {string} value - The input string to extract the first character from.
 * @return {string} - The first character of the string.
 *
 * @example
 *   getFirstChar('John Doe') => 'J'
 *   getFirstChar('cat') => 'c'
 *   getFirstChar('') => ''
 */
function getFirstChar(value) {
  return value.charAt(0);
}

/**
 * Removes leading and trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading and trailing whitespaces from.
 * @return {string} - The string with leading and trailing whitespaces removed.
 *
 * @example
 *   removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
 *   removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Removes only leading whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

/**
 * Removes only trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  // let res = '';
  // for (let i = 1; i <= times; i += 1) {
  //   res += str;
  // }
  // return res;
  if (times < 0) return '';
  return str.repeat(times);
}

/**
 * Remove the first occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(str, value) {
  // return str.replace(value, '');
  // OR (npm test likes variant above, but firstly was hated it)
  // const target = str.indexOf(value, 0);
  // return str.slice(0, target) + str.slice(target + value.length);
  // OR
  const target = str.indexOf(value);
  if (target === -1) {
    return str;
  }
  return str.slice(0, target) + str.slice(target + value.length);
}

/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(str, value) {
  const target = str.lastIndexOf(value, 99);
  if (target === -1) {
    return str;
  }
  return str.slice(0, target) + str.slice(target + value.length);
}

/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  // if (str === undefined || str === null) return 0; //vs below
  if (!str) return 0;
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += str[i].charCodeAt(0);
    // console.log(typeof str[i].charCodeAt(0));
  }
  return sum;
}

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}

/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  // if (minutes < 10) {
  //   // minutes = '0'.concat(minutes); //vs
  //   // eslint-disable-next-line no-param-reassign
  //   minutes = `0${minutes}`;
  // }
  // if (seconds < 10) {
  //   // seconds = '0'.concat(seconds); //vs
  //   // eslint-disable-next-line no-param-reassign
  //   seconds = `0${seconds}`;
  // }
  // return minutes.toString().concat(':', seconds.toString());
  // OR, try solution above, but do not forget method toString()
  const min = minutes.toString().padStart(2, '0'); // without toString() method get an error, cuz arguments are numbers, not strings
  const sec = seconds.toString().padStart(2, '0'); // try the same without toString() method, but put as an argument a string numbers, e.g '5', ...it works nice
  return `${min}:${sec}`;
}

/**
 * Returns a string in reverse order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in reverse order.
 *
 * @example:
 *   reverseString('abcdef') => 'fedcba'
 *   reverseString('12345') => '54321'
 */
function reverseString(str) {
  const splitStrToArr = str.split('');
  const reversedArr = splitStrToArr.reverse();
  const joinBackToStr = reversedArr.join('');
  return joinBackToStr;
}

/**
 * Returns a string with characters in alphabetical order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in alphabetical order.
 *
 * @example:
 *   orderAlphabetically('webmaster') => 'abeemrstw'
 *   orderAlphabetically('textbook') => 'bekoottx'
 *   orderAlphabetically('abc123xyz') => '123abcxyz'
 */
function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

/**
 * Checks if a given string contains a specified substring.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substring - The substring to check for in the input string.
 * @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 *
 * @example
 *   containsSubstring('Hello, World!', 'World') => true
 *   containsSubstring('JavaScript is Fun', 'Python') => false
 *   containsSubstring('12345', '34') => true
 */
function containsSubstring(str, substring) {
  return str.includes(substring);
}

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  const arrOfVowels = [
    'a',
    'e',
    'i',
    'o',
    'u',
    'y',
    'A',
    'E',
    'I',
    'O',
    'U',
    'Y',
  ];
  let sumOfVovels = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (arrOfVowels.includes(str[i])) {
      sumOfVovels += 1;
    }
  }
  return sumOfVovels;
}

/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - The input string.
 * @return {bool} - True if the string is a palindrome, false otherwise.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */
function isPalindrome(str) {
  const prepString = str.toLowerCase().replace(/[^a-zA-Z]/g, '');
  return prepString === prepString.split('').reverse().join('');
}

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  const splittedSentence = sentence.split(' ');
  let longestWord = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const word of splittedSentence) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
    // console.log(word);
  }
  // VS classic loop
  // for (let i = 0; i < splittedSentence.length; i += 1) {
  //   if (splittedSentence[i].length > longestWord.length) {
  //     longestWord = splittedSentence[i];
  //   }
  //   // console.log(splittedSentence[i]);
  // }
  return longestWord;
}

/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  const reversedStrFromArr = str.split('').reverse().join('');
  return reversedStrFromArr.split(' ').reverse().join(' ');
}

/**
 * Inverts the case of each character in the given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the case of each character inverted.
 *
 * @example
 *   invertCase('Hello, World!') =>  'hELLO, wORLD!'
 *   invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
 *   invertCase('12345') => '12345'
 */
function invertCase(str) {
  const newArr = str.split('');
  let newInvertedStr = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const char of newArr) {
    if (char === char.toUpperCase()) {
      newInvertedStr += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      newInvertedStr += char.toUpperCase();
    }
  }
  return newInvertedStr;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName - The first name to include in the template.
 * @param {string} lastName - The last name to include in the template.
 * @return {string} - The formatted string generated from the template.
 *
 * @example
 *   getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
 *   getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  // return value.replace('Hello, ', '').replace('!', '');
  // OR
  return value.slice(7, -1);
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  const arrOfEmails = str.split(';');
  // console.log(arrOfEmails);
  const extrEmail = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const email of arrOfEmails) {
    extrEmail.push(email);
  }
  return extrEmail;
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const inputCiph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const outputCiph = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  // const strToArr = str.split('');
  let encodedData = '';
  // const regEx = /[a-zA-Z]/g;
  // eslint-disable-next-line no-restricted-syntax
  for (let i = 0; i < str.length; i += 1) {
    const signByIdx = inputCiph.indexOf(str[i]);
    encodedData += outputCiph[signByIdx];
  }

  return encodedData;
}

/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
// eslint-disable-next-line consistent-return
function getCardId(value) {
  const cardsArr = value.join('');
  for (let i = 0; i < cardsArr.length; i += 1) {
    if (value === 'A' || value === 'A' || value === 'A' || value === 'A') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '2' || value === '2' || value === '2' || value === '2') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '3' || value === '3' || value === '3' || value === '3') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '4' || value === '4' || value === '4' || value === '4') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '5' || value === '5' || value === '5' || value === '5') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '6' || value === '6' || value === '6' || value === '6') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '7' || value === '7' || value === '7' || value === '7') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '8' || value === '8' || value === '8' || value === '8') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '9' || value === '9' || value === '9' || value === '9') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === '10' || value === '10' || value === '10' || value === '10') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === 'J' || value === 'J' || value === 'J' || value === 'J') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === 'Q' || value === 'Q' || value === 'Q' || value === 'Q') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
    if (value === 'K' || value === 'K' || value === 'K' || value === 'K') {
      return +toString(value).replace(/[^a-zA-Z]/g, '');
    }
  }
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
