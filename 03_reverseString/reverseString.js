const reverseString = function(string) {
  let reverse ="";
  splitString = string.split("");
  for (i=string.length; i>0; i--) {
    reverse += splitString.pop();
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
