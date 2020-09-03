// QUESTION 1- Program to search for a particular character in a string

let str = "Chayan Kanungo";
let char = "c";
if (str.indexOf(char) != -1) {
  console.log(`element ${char} is present at position ${str.indexOf(char)}`);
} else {
  console.log("element not found");
}

// ------------------------------------------------------------------------------------------------------------------

// QUESTION 2- Program to convert minutes to seconds

let minute = 40;
let second = minute * 60;
console.log(second);

//-------------------------------------------------------------------------------------------------------------------

//QUESTION 3- Program to search for an element in an array of strings

let arr = ["Chayan", "Kanungo", "Lets", "UpGrade", "Javascript"];
let element = "chayan";
arr.forEach((ele, i) => {
  if (ele === element) {
    console.log(`${ele} is present at index ${i}`);
  }
});

//-------------------------------------------------------------------------------------------------------------------

//QUESTION 4- Program to display only elements containing 'a' in them from an array

let arr1 = ["chayan", "Kanungo", "Lets", "UpGrAde", "Javascript", "python"];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i].includes("a")) {
    console.log(arr1[i]);
  }
}

//-------------------------------------------------------------------------------------------------------------------

//QUESTION 5- Print an array in reverse order

let arr2 = ["chayan", "kanungo", "Lets", "UpGrade", "Javascript", "python"];
let arr3 = arr2.reverse();
console.log(arr3);

//OR
let arr4 = ["chayan", "kanungo", "Lets", "UpGrade", "Javascript", "python"];
let arr5 = [];
len = arr4.length;
for (let i = 0; i < len; i++) {
  arr5.push(arr4.pop());
}
console.log(arr5);

//--------------------------------------------------------------------------------------------------------------------
