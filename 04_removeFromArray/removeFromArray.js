const removeFromArray = function(...args) {
  let array = args.shift();
  let removals = Array.from(args);
  let newArray= [];
  for (const val of array) {
    if (!removals.includes(val)) {
      newArray.push(val);
    }
  }
  
return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
