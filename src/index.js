var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

// "install": "concurrently \"npm install\" \"cd backend && npm install\"  \"cd Dashboard && npm install\""
// "start": "concurrently \"cd backend && node app.js\" \"cd Dashboard && npm run start\"",
// "install": "npm install"
