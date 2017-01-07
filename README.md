# SpeedTest.js
A Node.js tool for testing HTTP Internet speeds between an user and a destination hosts.
Currently only supports *download speed tests*.

## File Generation
Files of a fixed can be generated on a server by the command:
```bash
dd if=/dev/random of=item bs=50000000 count=1
```

## Usage
You must have a file of a fixed size uploaded to the server you are trying to test HTTP download speeds against.
```javascript
var lib = require("speedtest.js");

var URL = "http://localhost:8000/item"; // where the test file is stored
var PACKET_SIZE = 50000000; // dd if=/dev/random of=item bs=50000000 count=1

var SpeedTest = new lib(PACKET_SIZE, URL);

SpeedTest.runDownload(function (result){
  console.log("Speed test concludes you can download at a rate of", result, "mbsp whilst connected to", URL);
});
```
