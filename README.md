# SpeedTest.js
A Node.js tool for testing Internet speeds between an user and a destination hosts.
Currently only supports *download speed tests*.

## File Generation
Files can be generated to live on a server you are trying to test using the command:
```bash
dd if=/dev/random of=item bs=50000000 count=1
```
