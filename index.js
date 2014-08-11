var server = require("./server");
var led = require("./led");
var router = require("./router");

led.initiate(3);
server.start(router.route,[led]);
