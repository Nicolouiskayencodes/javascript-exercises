const palindromes = function (string) {
  let alphanumerals = "abcdefghijklmnopqrstuvwxyvABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  let array = string.split("")
  let filteredarray = array.filter(function(item) {
      return alphanumerals.includes(item);
    })
  let lowercasearray = filteredarray.map(function(item) {
    return item.toLowerCase();
  })
  let backup = lowercasearray.map(function(item) {
    return item;
  })
  let reversearray = lowercasearray.reverse();
  if (backup.join("") == reversearray.join("")) {
    return true;
  } else {
    return false;
  }
  
};

// Do not edit below this line
module.exports = palindromes;
