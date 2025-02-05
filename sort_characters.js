const SortCharacter = (case1) => {
  let lowerCaseInput = case1.toLowerCase().replace(/\s/g, "");
  let vowelArray = ["a", "e", "i", "o", "u"];
  let vowelChars = "";
  let consonantChars = "";
  let firstConsonant = "";

  for (let i = 0; i < lowerCaseInput.length; i++) {
    let char = lowerCaseInput[i];

    if (vowelArray.includes(char)) {
      vowelChars += char;
    } else {
      if (!firstConsonant) {
        firstConsonant = char;
      }
      consonantChars += char;
    }
  }

  vowelChars = vowelChars.split("").sort().join("");

  consonantChars = firstConsonant + consonantChars;

  if (vowelChars) {
    console.log(`Vowel Characters : ${vowelChars}`);
  }
  if (consonantChars) {
    console.log(`Consonant Characters : ${consonantChars}`);
  }
};

SortCharacter("Sample Case");
SortCharacter("Next Case");
