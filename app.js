const logger = require("./logger");
const path = require("path");
const os = require("os");
const http = require("http");
const express = require("express");
const exp = require("constants");

const expressServer = express();
expressServer.use(express.json());

const courses = [
  { id: 356476564, name: "Ntambaazi Tonny revolution" },
  { id: 357284748, name: "Optimizing computer graphics" },
  { id: 351882634, name: "Making shasa, the number 1 AI assistant" },
];
//http server
const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.write("hello world!, this is the HTML server!");
    response.end();
  }
  if (request.url == "api/courses") {
    response.write("we are in the courses section");
    response.end();
  }
});

//express Server

expressServer.get("/", (request, response) => {
  response.send("Hello world!, this is the express Server!");
  response.end();
});

expressServer.get("/api/courses", (request, response) => {
  //response.send("Hello world! these are the courses available!:", courses);
  response.send(courses);
  response.end();
});

expressServer.get("/api/courses/:id", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course) {
    response.status(404).send("The requested course wasn't found!");
    return;
  }
  console.log(course);
  console.log(course);
  response.send(courses[2]);
  response.end();
});

expressServer.post("/api/courses/", (request, response) => {
  const course = { id: request.body.id, name: request.body.name };
  courses.push(course);
  response.send(course);
  response.end();
});

expressServer.put("/api/courses/:id", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course) {
    response.status(404).send("The requested course wasn't found!");
    return;
  }

  course.name = request.body.name;
  response.send(course);
  response.end();
});

expressServer.delete("/api/courses/:id", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course) {
    response.status(404).send("The requested course wasn't found!");
    return;
  }

  const courseIndex = courses.indexOf(course);
  courses.splice(index);
  response.send(course);
  response.end();
});

server.listen(2000);
expressServer.listen(3000);

/*working with node modules:

Global functions

console.log()
setTimeOut()
clearTimeOut()
setInterval()
clearInterval()

*/
