function kth(str, k) {
  const charCountKeyValuePair = {};
  for (let char of str) {
    if (!charCountKeyValuePair[char]) {
      charCountKeyValuePair[char] = 1;
    } else {
      charCountKeyValuePair[char]++;
    }
  }

  const arrayCharsValuePair = Object.entries(charCountKeyValuePair);

  arrayCharsValuePair.sort((a, b) => a[1] - b[2]);

  return arrayCharsValuePair[k - 1][0];
}

function newAlphabet(string, newAlphabetOrder) {
  const objLexicographicalOrder = {};
  let currentLetterOrder = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < newAlphabetOrder.length; i++) {
    const alphabetLetter = newAlphabetOrder[i];
    objLexicographicalOrder[alphabetLetter] = i;
  }

  for (letter of string) {
    if (objLexicographicalOrder[letter] >= currentLetterOrder) {
      currentLetterOrder = objLexicographicalOrder[letter];
    } else {
      return false;
    }
  }
  return true;
}

function longestSubstr(str) {
  let longstSbstr = "";

  const keyValueLetterStr = {};

  for (let char of str) {
    if (!keyValueLetterStr[char]) {
      keyValueLetterStr[char] = char;

      longstSbstr += char;
    } else {
      return longstSbstr.length;
    }
  }

  return longstSbstr.length;
}

function maxSubarr(arr) {

}
module.exports = [kth];
