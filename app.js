// my current age
const myAge = 19;
// early years
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = "Andrew".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
