(function (window) {
var bayoObj = {};
var sayit = "Good Bye";
bayoObj.tell = function (name) {
  console.log(sayit + " " + name);
}

window.bayoObj = bayoObj;

})(window);
