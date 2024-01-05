function anagrams(str1, str2) {
  // Your code here
  // const charsAsKeysObj = str1.split("").reduce((obj, currentChar) => {
  //   if (!obj[currentChar]) obj[currentChar] = currentChar;
  //   return obj;
  // }, {});

  // for (char of str2) {
  //   if (!charsAsKeysObj[char]) return false;
  // }
  // return true;

  const set = new Set(str1);

  for (let char of str2) {
    if (!set.has(char)) return false;
  }
  return true;
}

function commonElements(arr1, arr2) {
  const elementsSet = new Set(arr1);

  return arr2.filter((el) => elementsSet.has(el));
}

function duplicate(arr) {
  let objWithElementsCount = {};

  for (let el of arr) {
    if (!objWithElementsCount[el]) {
      objWithElementsCount[el] = 1;
    } else {
      objWithElementsCount[el]++;
    }
  }

  for (let el of arr) {
    if (objWithElementsCount[el] > 1) {
      return el;
    }
  }
  return "no duplicates";
}

function twoSum(nums, target) {
  const numsSet = new Set(nums);

  for (let num of nums) {
    let numToSearch = target - num;
    numsSet.delete(num);
    if (numsSet.has(numToSearch)) return true;
    numsSet.add(num);
  }
  return false;
}

function wordPattern(pattern, strings) {
  if (pattern.length !== strings.length) return false;

  const patternSet = new Set();
  const stringsSet = new Set();
  const objPatternWord = {};

  for (let i = 0; i < strings.length; i++) {
    const char = pattern[i];
    const word = strings[i];
    if (!patternSet.has(char) && !stringsSet.has(word)) {
      patternSet.add(char);
      stringsSet.add(word);
      objPatternWord[char] = word;
    } else if (objPatternWord[char] !== word) {
      return false;
    }
  }
  return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
