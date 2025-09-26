//step 2
let myArray = [10, "banana", true];
console.log(myArray);

//step 2a (adding new elements with push)
myArray.push([1, 2, 3]);
myArray.push("added string");
console.log(myArray);

myArray[2] = "something new";

//step 2b remove elements using shift
myArray.shift();
console.log(myArray);

//step 2c change 2nd element using
myArray[1] = 345;
console.log(myArray);

//step 2d replace last one with "false"
myArray[myArray.lenghth - 1] = false;
console.log(myArray);

//step 3
let i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

//step 5

//step 6
