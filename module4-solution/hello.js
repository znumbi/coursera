(function (window) {
var helloObj = {};
var sayit = "Hello";
helloObj.tell = function (name) {
  console.log(sayit + " " + name);
}

window.helloObj = helloObj;

})(window);