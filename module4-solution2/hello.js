(function (window) {
var helloSpeaker = {};
var sayit = "Hello";
helloSpeaker.tell = function (name) {
  console.log(sayit + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);