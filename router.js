function route(req,res) {
  console.log("About to route a request for " + req.url);
  switch(req.url){
   case '/':
	console.log("Home");
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('welcome home');
	break;
   case "/ledChange":
	console.log("LED ON");
	led.changeState();
	break;
   default:
	console.log("404 of doom");
	res.writeHead(404,{'Content-Type':'text/plain'});
	res.end("Page not found yo!");
	break;
  }
}

exports.route = route;
