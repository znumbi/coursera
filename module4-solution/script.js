(function (window) {
var names = ["Ahmed", "Saléh", "Jamel", "Jim", "Joudi", "karim", "monir", "jomana"];

for (var name in names) {
  var fletter = (names[name]).charAt(0).toUpperCase();
  if (fletter == 'J') {
    window.bayoObj.tell(names[name]);
  } 
  else {
    window.helloObj.tell(names[name]);
  }
}
})(window);