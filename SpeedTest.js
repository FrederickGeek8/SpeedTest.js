var http = require('http');

var url = "";
var size;
var SpeedTest = function(packetSize, setUrl) {
  url = setUrl;
  size = packetSize;
};

SpeedTest.prototype.runDownload = function(callback) {
  http.get(url, function(response) {

    // console.log(d);
    var seconds = 0;
    response.once('data', function(data) {
      seconds = new Date().getTime();
    });

    response.once('end', function() {
      // console.log(new Date().getTime() - seconds);
      var result = (size / (new Date().getTime() - seconds));
      result /= 1000;
      callback(result);
    });
  });
};

module.exports = SpeedTest;
