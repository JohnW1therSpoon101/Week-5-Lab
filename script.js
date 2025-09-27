// Setup Array
let myArray = [10, "banana", true];
console.log(myArray);

// adding new elements with push
myArray.push([1, 2, 3]);
myArray.push("added string");
console.log(myArray);

// remove elements using shift
myArray.shift();
console.log(myArray);

// change 2nd element using
myArray[1] = 345;
console.log(myArray);

// replace last one with "false"
myArray[myArray.length - 1] = false;
console.log(myArray);

// new while loop
let i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

//modded array = let myArray = [ "banana", 345, [1, 2, 3], false];

// print data type of each using while loop
let j = 0;
while (j < myArray.length) {
  console.log(typeof myArray[j]);
  j++;
}

//MUSIC APPLICATION
// Create another array w/ elements 7 elements
let myScale = ["C", "D", "E", "F", "G", "A", "B"];
console.log(myScale);

// Print data types of each element
let k = 0;
while (k < myScale.length) {
  console.log(typeof myScale[k]);
  k++;
}

// print the entire array

console.log(myScale);

// modify myScale values
let m = 0;
while (m < myScale.length) {
  if (myScale[m] === "F") {
    myScale[m] = "F#"; //replacing F with F#
  } else if (myScale[m] === "B") {
    myScale[m] = "Bb"; //replacing B with Bb
  }
  m++;
}

// print modified scale
console.log(myScale);

//END OF PROJECT !
