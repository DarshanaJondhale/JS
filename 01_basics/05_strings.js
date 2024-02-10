const name = "Darshana"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String interpolation

const gameName = new String('Darshu')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherName = gameName.slice(-6,3)
console.log(anotherName);

const newStringOne = "   darshu   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trimstart() and trimend()

const url = "https://darshu.com/dd-%20dj"

console.log(url.replace("%20","-"));
console.log(url.includes("dd"));

console.log(url.split("-"));