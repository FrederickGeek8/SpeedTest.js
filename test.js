var lib = require("./SpeedTest.js");

var URL = "http://localhost:8000/item";
var PACKET_SIZE = 50000000; // dd if=/dev/random of=item bs=50000000 count=1

var SpeedTest = new lib(PACKET_SIZE, URL);

SpeedTest.runDownload(function (result){
  console.log("Speed test concludes you can download at a rate of", result, "mbsp whilst connected to", URL);
});
