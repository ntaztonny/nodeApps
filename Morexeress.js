/* 
Here we look at several topics including but not limited to:
-Middleware
-Configuration
-Debugging
-Templating engines 
*/

/*
the middleware fundtion are used in the Request processing pipeline where a request is sent and a response is received
Middleware functions: Pass a control from one function to another one
*/

//creating middleware functions

function Logging(request, response, next) {
  console.log("Logging ....");
  next();
}

function Authentication(request, response, next) {
  console.log("Authenticating ....");
  next();
}

module.exports.logFunction = Logging;
module.exports.AuthFunction = Authentication  ;
