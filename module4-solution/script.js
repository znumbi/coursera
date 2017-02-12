(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura" , "Jim"];

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
