const numberEnglishToBangla = (num) => {
  // Bengali numeric characters from "০" to "৯"
  const bangliNumber = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  // num is zero return the numeric character
  if (num === 0) return bangliNumber[0];

  //  store the bangla numbers
  let bangla = "";

  // condition if num greater the zero;
  while (num > 0) {
    // At first, num divided by 10. This is done using the modulo operator %
    const digit = num % 10;

    // we get index number using bangli array
    bangla = bangliNumber[digit] + bangla;

    //the loop continues using this method
    num = Math.trunc(num / 10);
  }

  // return this result
  return bangla;
};

let x = "01023";

const bangla = numberEnglishToBangla(60);

console.log(bangla);
