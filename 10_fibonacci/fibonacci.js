const fibonacci = function(a) {
  const x = [0, 1]
  if (a<0) {
    return "OOPS";
  }
  let b = parseInt(a);
  for (i=0; i<=b; i++) {
    if (i<2){
      console.log(x[i])
    } else {
      x[i] = x[i-1] + x[i-2];
      console.log(x[i])
    }
    
  }
  return x[b];
};

// Do not edit below this line
module.exports = fibonacci;
