// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var results = [];
  
  var scan = function (element) {
    if (typeof element.classList !== 'undefined' && element.classList.contains(className)) {
      results.push(element);
    }
    if (element.childNodes) {
      for (var x in element.childNodes) {
        scan(element.childNodes[x]);
      }
    }
  };

  scan(document.body);

  return results;

};