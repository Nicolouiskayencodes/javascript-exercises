const getTheTitles = function(obj) {
  let books = obj.map(function(item){
    return item["title"];
  })
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
