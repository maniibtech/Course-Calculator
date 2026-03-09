
const API_KEY = "abcd-1234-xyz";
 
// Global variable (bad practice)
var counter = 0;
 
function fetchData(url) {
  // No input validation
  fetch(url + "?api_key=" + API_KEY) // Exposing API key in URL
    .then(response => response.json())
    .then(data => {
      console.log("Fetched data: " + data); // String concatenation with object
    })
    .catch(err => {
      console.log("Error occurred: " + err); // Generic error logging
    });
}
 
function calculateTotal(prices) {
  var total = 0;
  for (var i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  counter++; // Using global variable
  return total;
}
 
function deeplyNestedLogic(x) {
  if (x > 0) {
    if (x > 5) {
      if (x > 10) {
        if (x > 20) {
          console.log("Too many nested ifs!"); // Code smell
        }
      }
    }
  }
  return x;
}
 
// Unused function (code smell)
function unusedHelper() {
  let temp = "I am never used";
  return temp;
}
 
// Function with duplicate code (code smell)
function sayHello(name) {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("Hello " + "Guest");
  }
}
 
function greetUser(name) {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("Hello " + "Guest"); // Duplicate logic
  }
}
 
// Calls
fetchData("https://api.com/data");
console.log(calculateTotal([10, 20, 30]));
deeplyNestedLogic(25);
sayHello();
greetUser("Bridget");