// exercise 1 from chris

// create a function that takes in two numbers 
// and returns the result of adding them together

// var addNum = function(a,b){
//  return a + b;
// };

// console.log(addNum(4, 10));

// var test = addNum(4,addNum(5,2));
// console.log(test);


// exercise 2 from chris
// set it up so that it takes a string and reverses each word separately
// goal is to make:
// hello world --> olloh dlrow


// var inputStr = "hello world";

// var convertStr = function(inputStr) {
	// turn string into array
  // var input2 = inputStr.split("")
	// reverse order of array
	// .reverse()
	// join items in the array together using given separater and return as string
	// .join("")
	// turn string back into array
	// .split(" ")
	// reverse order of array
	// .reverse()
	// join items in the array together with space between and return as string
	// .join(" ");
  // need return line or fun will ALWAYS return undefined
  // return input2;
// };

// console.log(convertStr(inputStr));

// exercise 3 from chris
// create a func that allows you to search through a string
// takes in a string and search term (2 params)
// only return true if the word searched for exists as a WHOLE WORD in the param

var inputStr = prompt("Input an example sentence, anything you wish!");
var searchTerm = prompt("Now type a full word that you want to search for from your last sentence.");

var myStrSearch = function(inputStr, searchTerm){
  
  // destructive! changing inputStr
  // inputStr = inputStr.split(' ');
  var words = inputStr.split(' ');

  for(var i=0; i < words.length; i++) {
   
    if(words[i] === searchTerm) {
      console.log("\"" + searchTerm + "\"" + " was found in your example sentence!");
    }
    else
      console.log("Search term not found!");
  }
};

myStrSearch(inputStr, searchTerm);

// if whole word - return true
// else fail - alert the user there were no results

// first I want to split() my inputStr 
// loop through all the words
// see if any of the words match up with the searchTerm








