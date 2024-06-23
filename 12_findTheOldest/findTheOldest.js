const findTheOldest = function(obj) {
  let sortedAge = obj.sort(function(a,b) {
    if (!a.hasOwnProperty("yearOfDeath")) {
      a["yearOfDeath"] = new Date().getFullYear();
    }
    if (!b.hasOwnProperty("yearOfDeath")) {
      b["yearOfDeath"] = new Date().getFullYear();
    }
    let ageA = a["yearOfDeath"] - a["yearOfBirth"];
    console.log(ageA);
    let ageB = b["yearOfDeath"] - b["yearOfBirth"];
    console.log(ageB);
    if (ageA > ageB) {
      return -1;
    } else if (ageA < ageB) {
      return 1;
    } else {
      return 0;
    }
  })
  return sortedAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
