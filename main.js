var http = require("http");

function samp(req, res) {
  if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
    <h1>Admin page</h1>
    <h1>login</h1>
    <label>username</label><br>
    <input type="text">
    <label>password</label>
    <input type="password" /><br>
    <button type="submit">submit</button>
    `);

    res.end("<h1>URL was:" + req.url + "</h1>");
  } 
  else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`
    <h1>Student page</h1>
    <h1>view details</h1>    
    `);
    res.end("<h1>URL was:" + req.url + "</h1>");
  }  else {
    res.end("invalid request");
  }
}

var server = http.createServer(samp);
server.listen(3000);
console.log("server running");

