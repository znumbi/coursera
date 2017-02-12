(function (window) {
var byeSpeaker= {};
var sayit = "Good Bye";
byeSpeaker.tell = function (name) {
  console.log(sayit + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);