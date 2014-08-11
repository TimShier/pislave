var server = require("./server");
var led = require("./led");
var router = require("./router");

server.start(router.route);
led.initiate(3);
