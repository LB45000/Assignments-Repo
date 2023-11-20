function reverseVowelsAndReplaceL(inputString) {
  const stringWithReplacedL = inputString.replace(/L/gi, '1');
  const reversedVowels = reverseVowels(stringWithReplacedL);
  return reverseVowelsAndReplaceO(reversedVowels);
}

function reverseVowelsAndReplaceO(reversedVowels) {
  const doubleReversedVowels = reverseVowels(reversedVowels);
  const stringWithReplacedO = doubleReversedVowels.replace(/O/gi, '0');
  return reverseVowelsAndReplaceS(stringWithReplacedO);
}

function reverseVowelsAndReplaceS(stringWithReplacedO) {
  const finalString = stringWithReplacedO.replace(/S/gi, '5');
  console.log("Reversed Vowels:", finalString);
  return finalString;
}

function reverseVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const strArray = str.split('');
  let left = 0;
  let right = strArray.length - 1;

  while (left < right) {
    while (left < right && !vowels.includes(strArray[left])) {
      left++;
    }

    while (left < right && !vowels.includes(strArray[right])) {
      right--;
    }

    const temp = strArray[left];
    strArray[left] = strArray[right];
    strArray[right] = temp;

    left++;
    right--;
  }

  return strArray.join('');
}

const inputString = "Hello World!";
const result = reverseVowelsAndReplaceL(inputString);
