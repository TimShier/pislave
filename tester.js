var gpio = require("pi-gpio");
var sleep = require("sleep");

gpio.open(3, "output", function(err) {        // Open pin 16 for output
    gpio.write(3, 1, function() {            // Set pin 16 high (1)
	gpio.close(3);
    });
    sleep.sleep(200)
    gpio.write(3,0, function(){
	gpio.close(3);
    });
});
