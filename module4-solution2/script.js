(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura" , "Jim"];

for (var name in names) {
  var fletter = (names[name]).charAt(0).toUpperCase();
  if (fletter == 'J') {
    window.byeSpeaker.tell(names[name]);
  } 
  else {
    window.helloSpeaker.tell(names[name]);
  }
}
})(window);