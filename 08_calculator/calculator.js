const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
    let newsum = array.reduce((b, item) => b + item, 0)
    return newsum;
 
};

const multiply = function(array) {
  let multiple = array.reduce((a,b)=> a*b, 1)
  return multiple;
};

const power = function(a,b) {
  let x=1
	for (i=0; i<b; i++) {
    x *= a
  }
  return x;
};

const factorial = function(a) {
	let x = 1;
  for (i=a; i>0; i--) {
    x *= i;
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
