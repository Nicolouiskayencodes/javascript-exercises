const sumAll = function(n,j) {
  let sum = 0;
 if (n < 0 || j < 0 || typeof(n) != "number" || typeof(j) != "number") {
  return "ERROR";
 } else if (n>j) {
  let i = j;
  while (i<=n) {
    sum = sum +i;
    i++;
  }
 } else {
  let i = n;
  while (i<=j) {
    sum = sum + i;
    i++;
 }
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
