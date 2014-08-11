var gpio = require("pi-gpio")

var pinCode = -1
var pinState = 0

function initiate(pinNumber){
 console.log ("adding LED for: " + pinNumber)
 pinCode = pinNumber
 gpio.open(pinCode,"output")
 console.log("LED " + pinCode + " is open");
}

function stateChange(){
 pinState++;
 if (pinState > 1)
 	pinState = 0;
 gpio.write(pinCode,pinState);
}

exports.initiate = initiate
exports.stateChange = stateChange
